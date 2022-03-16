import Home from '@/views/core/Home.vue'
import SetNewPassword from "@/views/core/user/SetNewPassword.vue"
import UserHome from "@/views/core/user/UserHome.vue"
// import Setting from "@/views/core/user/Setting.vue"
import ProblemLIst from "@/views/core/problem/ProblemList.vue"
import Logout from "@/views/core/user/Logout.vue"
// import SubmissionList from "@/views/core/status/SubmissionList.vue"
// import SubmissionDetails from "@/views/core/status/SubmissionDetails.vue"
// import ContestList from "@/views/core/contest/ContestList.vue"
// import Problem from "@/views/core/problem/Problem.vue"
// import ACMRank from "@/views/core/rank/ACMRank.vue"
// import OIRank from "@/views/core/rank/OIRank.vue"
// import ContestDetails from "@/views/core/contest/ContestDetails.vue"
// import ACMScoreBoard from "@/views/core/contest/outside/ACMScoreBoard.vue"
// import OIScoreBoard from "@/views/core/contest/outside/OIScoreBoard.vue"
// import ContestProblemList from "@/views/core/contest/children/ContestProblemList.vue"
// import ContestRank from "@/views/core/contest/children/ContestRank.vue"
// import ACMInfoAdmin from "@/views/core/contest/children/ACMInfoAdmin.vue"
// import Announcements from "@/components/core/common/Announcements.vue"
// import ContestComment from "@/views/core/contest/children/ContestComment.vue"
// import ContestPrint from "@/views/core/contest/children/ContestPrint.vue"
// import ContestAdminPrint from "@/views/core/contest/children/ContestAdminPrint.vue"
// import ContestRejudgeAdmin from "@/views/core/contest/children/ContestRejudgeAdmin.vue"
// import DiscussionList from "@/views/core/discussion/discussionList.vue"
// import Discussion from "@/views/core/discussion/discussion.vue"
// import Introduction from "@/views/core/about/Introduction.vue"
// import Developer from "@/views/core/about/Developer.vue"
// import Message from "@/views/core/message/message.vue"
// import UserMsg from "@/views/core/message/UserMsg.vue"
// import SysMsg from "@/views/core/message/SysMsg.vue"
// import TrainingList from "@/views/core/training/TrainingList.vue"
// import TrainingDetails from "@/views/core/training/TrainingDetails.vue"
// import TrainingProblemList from "@/views/core/training/TrainingProblemList.vue"
// import TrainingRank from "@/views/core/training/TrainingRank.vue"
// import NotFound from "@/views/404.vue"
//
const core = [
    {
        path: '/',
        redirect: '/home',
        component: Home,
        meta: { title: 'Home' }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { title: 'Home' }
    },
    {
        path: '/problem',
        name: 'ProblemList',
        component: ProblemLIst,
        meta: { title: 'Problem' }
    },
    //   {
    //     path: '/problem/:problemID',
    //     name: 'ProblemDetails',
    //     component: Problem,
    //     meta: { title: 'Problem Details' }
    //   },
    //   {
    //     path: '/training',
    //     name: 'TrainingList',
    //     component: TrainingList,
    //     meta: { title: 'Training' }
    //   },
    //   {
    //     name: 'TrainingDetails',
    //     path: '/training/:trainingID/',
    //     component:TrainingDetails,
    //     meta: {title: 'Training Details'},
    //     children: [
    //       {
    //         name: 'TrainingProblemList',
    //         path: 'problems',
    //         component: TrainingProblemList,
    //         meta: { title: 'Training Problem' }
    //       },
    //       {
    //         name: 'TrainingProblemDetails',
    //         path: 'problem/:problemID/',
    //         component: Problem,
    //         meta: { title: 'Training Problem Details' }
    //       },
    //       {
    //         name: 'TrainingRank',
    //         path: 'rank',
    //         component: TrainingRank,
    //         meta: { title: 'Training Rank' }
    //       }
    //     ]
    //   },
    //   {
    //     path: '/contest',
    //     name: 'ContestList',
    //     component: ContestList,
    //     meta: { title: 'Contest' }
    //   },
    //   {
    //     path: '/contest/acm-scoreboard/:contestID',
    //     name: 'ACMScoreBoard',
    //     component: ACMScoreBoard,
    //     meta: { title: 'ACM Contest ScoreBoard' }
    //   },
    //   {
    //     path: '/contest/oi-scoreboard/:contestID',
    //     name: 'OIScoreBoard',
    //     component: OIScoreBoard,
    //     meta: { title: 'OI Contest ScoreBoard' }
    //   },
    //   {
    //     name: 'ContestDetails',
    //     path: '/contest/:contestID/',
    //     component:ContestDetails,
    //     meta: {title: 'Contest Details',requireAuth:true},
    //     children: [
    //       {
    //         name: 'ContestSubmissionList',
    //         path: 'submissions',
    //         component: SubmissionList,
    //         meta: { title: 'Contest Submission' }
    //       },
    //       {
    //         name: 'ContestSubmissionDeatil',
    //         path: 'problem/:problemID/submission-deatil/:submitID',
    //         component: SubmissionDetails,
    //         meta: { title: 'Contest Submission Deatil' }
    //       },
    //       {
    //         name: 'ContestProblemList',
    //         path: 'problems',
    //         component: ContestProblemList,
    //         meta: { title: 'Contest Problem' }
    //       },
    //       {
    //         name: 'ContestProblemDetails',
    //         path: 'problem/:problemID/',
    //         component: Problem,
    //         meta: { title: 'Contest Problem Details' }
    //       },
    //       {
    //         name: 'ContestAnnouncementList',
    //         path: 'announcements',
    //         component: Announcements,
    //         meta: { title: 'Contest Announcement' }
    //       },
    //       {
    //         name: 'ContestRank',
    //         path: 'rank',
    //         component: ContestRank,
    //         meta: { title: 'Contest Rank' }
    //       },
    //       {
    //         name: 'ContestACInfo',
    //         path: 'ac-info',
    //         component: ACMInfoAdmin,
    //         meta: { title: 'Contest AC Info',requireAdmin: true}
    //       },
    //       {
    //         name:'ContestRejudgeAdmin',
    //         path:'rejudge',
    //         component:ContestRejudgeAdmin,
    //         meta: { title: 'Contest Rejudge',requireSuperAdmin:true }
    //       },
    //       {
    //         name: 'ContestComment',
    //         path:'comment',
    //         component: ContestComment,
    //         meta: { title: 'Contest Comment'}
    //       },
    //       {
    //         name: 'ContestPrint',
    //         path:'print',
    //         component: ContestPrint,
    //         meta: { title: 'Contest Print'}
    //       },
    //       {
    //         name: 'ContestAdminPrint',
    //         path:'admin-print',
    //         component: ContestAdminPrint,
    //         meta: { title: 'Contest Admin Print'}
    //       }
    //     ]
    //   },
    //   {
    //     path: '/status',
    //     name: 'SubmissionList',
    //     component: SubmissionList,
    //     meta: { title: 'Status' }
    //   },
    //   {
    //     path: '/submission-detail/:submitID',
    //     name: 'SubmissionDeatil',
    //     component: SubmissionDetails,
    //     meta: {title: 'Submission Deatil' }
    //   },
    //   {
    //     path: '/acm-rank',
    //     name: 'ACM Rank',
    //     component: ACMRank,
    //     meta: { title: 'ACM Rank' }
    //   },
    //   {
    //     path: '/oi-rank',
    //     name: 'OI Rank',
    //     component: OIRank,
    //     meta: { title: 'OI Rank' }
    //   },
    {
        path: '/reset-password',
        name: 'SetNewPassword',
        component: SetNewPassword,
        meta: { title: 'Reset Password' }
    },
    {
        name: 'UserHome',
        path: '/user-home',
        component: UserHome,
        meta: { title: 'User Home' }
    },
    //   {
    //     name: 'Setting',
    //     path: '/setting',
    //     component: Setting,
    //     meta: { requireAuth: true, title: 'Setting' }
    //   },
    {
        name: 'Logout',
        path: '/logout',
        component: Logout,
        meta: { requireAuth: true, title: 'Logout' }
    },
    //   {
    //     path: '/discussion',
    //     name: 'AllDiscussion',
    //     meta: {title: 'Discussion'},
    //     component:DiscussionList
    //   },
    //   {
    //     path: '/discussion/:problemID',
    //     name: 'ProblemDiscussion',
    //     meta: {title: 'Discussion'},
    //     component:DiscussionList
    //   },
    //   {
    //     path: '/discussion-detail/:discussionID',
    //     name:'DiscussionDetail',
    //     meta: {title: 'Discussion Detail'},
    //     component: Discussion
    //   },
    //   {
    //     path: '/introduction',
    //     meta: {title: 'Introduction'},
    //     component:Introduction,
    //   },
    //   {
    //     path: '/developer',
    //     meta: {title: 'Developer'},
    //     component:Developer,
    //   },
    //   {
    //     name:'Message',
    //     path:'/message/',
    //     component:Message,
    //     meta: { requireAuth: true, title: 'Message' },
    //     children: [
    //       {
    //         name: 'DiscussMsg',
    //         path: 'discuss',
    //         component: UserMsg,
    //         meta: { requireAuth: true,title: 'Discuss Message' }
    //       },
    //       {
    //         name: 'ReplyMsg',
    //         path: 'reply',
    //         component: UserMsg,
    //         meta: { requireAuth: true,title: 'Reply Message' }
    //       },
    //       {
    //         name: 'LikeMsg',
    //         path: 'like',
    //         component: UserMsg,
    //         meta: { requireAuth: true,title: 'Like Message' }
    //       },
    //       {
    //         name: 'SysMsg',
    //         path: 'sys',
    //         component: SysMsg,
    //         meta: { requireAuth: true,title: 'System Message' }
    //       },
    //       {
    //         name: 'MineMsg',
    //         path: 'mine',
    //         component: SysMsg,
    //         meta: { requireAuth: true,title: 'Mine Message' }
    //       },
    //     ]
    //   },
    //   {
    //     path: '*',
    //     meta: {title: '404'},
    //     component:NotFound,
    //     meta: { title: '404' }
    //   }
]
export default core
