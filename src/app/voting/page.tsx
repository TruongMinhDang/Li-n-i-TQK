'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import {
  collection,
  doc,
  increment,
  runTransaction,
  query,
  onSnapshot,
} from 'firebase/firestore';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { useToast } from '@/hooks/use-toast';

const VOTE_OPTIONS = ['9/1', '9/2', '9/3', '9/4', '9/5', '9/6', '9/7', '9/8'];
const VOTING_COLLECTION = 'yearbook-votes-2024';
const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#AF19FF',
  '#FF4560',
  '#775DD0',
  '#FFC300',
];

export default function VotingPage() {
  const [votes, setVotes] = useState<any[]>([]);
  const [voted, setVoted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const q = query(collection(db, VOTING_COLLECTION));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const votesMap = new Map<string, number>();
      querySnapshot.forEach((doc) => {
        votesMap.set(doc.id, doc.data().votes);
      });

      const votesData = VOTE_OPTIONS.map((option) => ({
        name: option,
        votes: votesMap.get(option) || 0,
      }));

      setVotes(votesData);
    });

    if (localStorage.getItem(VOTING_COLLECTION)) {
      setVoted(true);
    }

    return () => unsubscribe();
  }, []);

  const handleVote = async (option: string) => {
    if (voted) {
      toast({
        title: 'Bạn đã bình chọn rồi',
        description:
          'Mỗi người chỉ được bình chọn 1 lần duy nhất cho cuộc bình chọn này.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const voteRef = doc(db, VOTING_COLLECTION, option);
      await runTransaction(db, async (transaction) => {
        const voteDoc = await transaction.get(voteRef);
        if (!voteDoc.exists()) {
          transaction.set(voteRef, { votes: 1 });
        } else {
          transaction.update(voteRef, { votes: increment(1) });
        }
      });

      localStorage.setItem(VOTING_COLLECTION, 'true');
      setVoted(true);

      toast({
        title: 'Bình chọn thành công!',
        description: `Cảm ơn bạn đã bình chọn cho lớp ${option}.`,
      });
    } catch (error) {
      console.error('Error voting: ', error);
      toast({
        title: 'Bình chọn thất bại',
        description: 'Có lỗi xảy ra, vui lòng thử lại.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
       <div className="flex justify-center mb-8">
         <img
           src="https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/25-26%2Fti%C3%AAu%20%C4%91%E1%BB%81%20c%C3%A1c%20pt%2020112025.png?alt=media&token=6873ea09-e702-4f62-aa66-46d02868295e"
           alt="Voting Banner"
           className="w-full max-w-5xl rounded-lg shadow-lg"
         />
       </div>
 
       <div className="text-center mb-10">
         <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 text-gray-800 dark:text-white">
           Bình chọn Kỷ yếu Dấu ấn tuổi xanh
         </h1>
         <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
           Hãy cùng bình chọn cho bộ ảnh kỷ yếu mà bạn yêu thích nhất từ các lớp
           khối 9. Mỗi người chỉ có một lượt bình chọn duy nhất.
         </p>
       </div>
 
       <div className="flex justify-center flex-wrap gap-4 mb-12">
         {VOTE_OPTIONS.map((option, index) => (
           <button
             key={option}
             onClick={() => handleVote(option)}
             disabled={voted}
             className="text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
             style={{
               backgroundColor: voted
                 ? '#9CA3AF'
                 : COLORS[index % COLORS.length],
             }}
           >
             Lớp {option}
           </button>
         ))}
       </div>
 
       {voted && (
         <p className="text-center text-lg font-semibold text-green-600 dark:text-green-400 mb-8">
           Cảm ơn bạn đã tham gia bình chọn!
         </p>
       )}
 
       <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl w-full">
         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
           Kết quả bình chọn (cập nhật tự động)
         </h2>
         <div style={{ width: '100%', height: 400 }}>
           <ResponsiveContainer>
             <BarChart
               data={votes}
               margin={{
                 top: 5,
                 right: 30,
                 left: 0,
                 bottom: 5,
               }}
             >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="name" />
               <YAxis allowDecimals={false} />
               <Tooltip
                 contentStyle={{
                   backgroundColor: 'rgba(255, 255, 255, 0.8)',
                   backdropFilter: 'blur(4px)',
                   border: '1px solid #ccc',
                   borderRadius: '0.5rem',
                 }}
               />
               <Legend />
               <Bar dataKey="votes" name="Số phiếu">
                 {votes.map((entry, index) => (
                   <Cell
                     key={`cell-${index}`}
                     fill={COLORS[VOTE_OPTIONS.indexOf(entry.name) % COLORS.length]}
                   />
                 ))}
               </Bar>
             </BarChart>
           </ResponsiveContainer>
         </div>
       </div>
     </div>
  );
}
