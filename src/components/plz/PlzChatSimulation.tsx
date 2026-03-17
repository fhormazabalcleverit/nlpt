import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Copy, ThumbsUp, ThumbsDown, BarChart3, Paperclip, AtSign, Globe, Play, Bookmark, Table as TableIcon, Send, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const PlzChatSimulation = () => {
    const { t } = useLanguage();
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setAnimationKey(prev => prev + 1);
        }, 10000); // Increased to 10s to give more reading time

        return () => clearInterval(timer);
    }, []);

    const tableData = [
        { name: 'Xavier Maldonado', email: 'xmaldonado@pulzen.ai', team: 'Platform Engineering', usage: '98%', lines: '2450', acceptance: '45%', color: 'bg-green-500/20 text-green-400' },
        { name: 'Valentina Soto', email: 'vsoto@pulzen.ai', team: 'Experience Design', usage: '92%', lines: '1100', acceptance: '40%', color: 'bg-green-500/20 text-green-400' },
        { name: 'Ricardo Pavez', email: 'rpavez@pulzen.ai', team: 'Data Science', usage: '85%', lines: '1890', acceptance: '35%', color: 'bg-yellow-500/20 text-yellow-500' },
        { name: 'Ignacio Silva', email: 'isilva@pulzen.ai', team: 'Security Ops', usage: '78%', lines: '900', acceptance: '28%', color: 'bg-yellow-500/20 text-yellow-500' },
        { name: 'Camila Reyes', email: 'creyes@pulzen.ai', team: 'Cloud Architecture', usage: '65%', lines: '650', acceptance: '22%', color: 'bg-yellow-500/20 text-yellow-600' },
    ];

    const sim = t.plzPlatform.bento.automation.chatSimulation;

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 1.2,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.21, 0.47, 0.32, 0.98]
            }
        }
    };

    return (
        <div className="w-full h-full bg-[#191919]/70 rounded-xl overflow-hidden flex flex-col font-sans relative border border-white/5">
            {/* Chat Content */}
            <motion.div
                key={animationKey}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-grow p-4 md:p-6 space-y-6 overflow-y-auto no-scrollbar scroll-smooth relative left-3 w-[350px]"
            >
                {/* User Message 1 */}
                <motion.div variants={itemVariants} className="flex justify-end">
                    <div className="bg-[#1E1E1E] text-gray-200 px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[85%] text-[13px] font-light">
                        {sim.userQ1}
                    </div>
                </motion.div>

                {/* AI Response 1 */}
                <motion.div variants={itemVariants} className="flex gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#19687A]/20 flex items-center justify-center">
                        <img src="/plz/brand/isotipo.svg" alt="AI Agent" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col gap-4 max-w-[90%]">
                        <p className="text-gray-300 text-[13px] font-light leading-relaxed">
                            {sim.aiR1}
                        </p>

                        {/* Table */}
                        <div className="border border-white/5 rounded-xl overflow-hidden shadow-2xl">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs">
                                    <thead>
                                        <tr className="border-b border-white/5">
                                            <th className="px-4 py-1 text-[9px] font-bold text-gray-500 uppercase tracking-wider">{sim.table.colaborador}</th>
                                            <th className="px-4 py-1 text-[9px] font-bold text-gray-500 uppercase tracking-wider">{sim.table.equipo}</th>
                                            <th className="px-4 py-1 text-[9px] font-bold text-gray-500 uppercase tracking-wider">{sim.table.uso}</th>
                                            <th className="px-4 py-1 text-[9px] font-bold text-gray-500 uppercase tracking-wider">{sim.table.lineas}</th>
                                            <th className="px-4 py-1 text-[9px] font-bold text-gray-500 uppercase tracking-wider text-right">{sim.table.aceptacion}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {tableData.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-white/5 transition-colors">
                                                <td className="px-4 py-3">
                                                    <div className="font-medium text-gray-200">{row.name}</div>
                                                    <div className="text-[10px] text-gray-500">{row.email}</div>
                                                </td>
                                                <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{row.team}</td>
                                                <td className="px-4 py-3 font-semibold text-gray-200">{row.usage}</td>
                                                <td className="px-4 py-3 text-gray-400">{row.lines}</td>
                                                <td className="px-4 py-3 text-right">
                                                    <span className={`px-2 py-1 rounded-md text-[10px] font-medium ${row.color}`}>
                                                        {row.acceptance}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* User Message 2 */}
                <motion.div variants={itemVariants} className="flex justify-end">
                    <div className="bg-[#1E1E1E] text-gray-200 px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[85%] text-[13px] font-light">
                        {sim.userQ2}
                    </div>
                </motion.div>

                {/* AI Response 2 */}
                <motion.div variants={itemVariants} className="flex gap-3 pb-8">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#19687A]/20 flex items-center justify-center">
                        <img src="/plz/brand/isotipo.svg" alt="AI Agent" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col gap-4 w-full max-w-[90%]">
                        <p className="text-gray-300 text-[13px] font-light leading-relaxed">
                            {sim.aiR2}
                        </p>

                        {/* Dashboard Card */}
                        <div className="bg-[#1E1E1E] border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-blue-500/30 transition-all cursor-pointer group group-hover:bg-blue-500/5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 ring-1 ring-blue-500/20">
                                    <BarChart3 className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[12px] font-medium text-gray-200">{sim.dashboard.title}</div>
                                    <div className="text-[10px] text-gray-500 font-light">{sim.dashboard.subtitle}</div>
                                </div>
                            </div>
                        </div>

                        {/* Action Icons 2 */}
                        <div className="flex gap-4 text-gray-500">
                            <Copy className="w-4 h-4 cursor-pointer hover:text-gray-300 transition-colors" />
                            <ThumbsUp className="w-4 h-4 cursor-pointer hover:text-gray-300 transition-colors" />
                            <ThumbsDown className="w-4 h-4 cursor-pointer hover:text-gray-300 transition-colors" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default PlzChatSimulation;
