/* Client-Testimonial Images */
import TestimonialImg from "./Images/client/client1.png";

/* Top-Profile Images */
import Profile1 from "./Images/community/top-profile/profile1.png";
import Profile2 from "./Images/community/top-profile/profile2.png";
import Profile3 from "./Images/community/top-profile/profile3.png";
import Profile4 from "./Images/community/top-profile/profile4.png";
import Profile5 from "./Images/community/top-profile/profile5.png";
import Profile6 from "./Images/community/top-profile/profile6.png";

/* JobPost Images  */
import Jobimg1 from "./Images/jobs/job1.jpg";
import Jobimg2 from "./Images/jobs/job2.jpg";
import Jobimg3 from "./Images/jobs/job3.jpg";
import Jobimg4 from "./Images/jobs/job4.jpg";

/* Partner Images */
import Partner1 from "./Images/partners/partner1.png";
import Partner2 from "./Images/partners/partner2.png";
import Partner3 from "./Images/partners/partner3.png";
import Partner4 from "./Images/partners/partner4.png";

/* Community Images */
import Post1dp from "./Images/community/profile-picture.png";
import Post2dp from "./Images/community/PostAsset/dp2.png";
import Post3dp from "./Images/community/PostAsset/dp3.png";
import Post4dp from "./Images/community/PostAsset/dp4.png";
import Post5dp from "./Images/community/PostAsset/dp5.png";

//Post Images
import PostImg1 from "./Images/community/PostAsset/postimgs/Post1.jpeg";

import PostImg3 from "./Images/community/PostAsset/postimgs/daf.jpg";
import PostImg4 from "./Images/community/PostAsset/postimgs/Post32.png";

import PostImg6 from "./Images/community/PostAsset/postimgs/Post6.png";
//Post Assets - Cponvert To Icon Later
import ClockPng from "./Assets/main-assets/clock.png";

import MessageBoxPng from "./Assets/main-assets/mail.png";
import UserPng from "./Assets/main-assets/user-plus.png";
import MoreSettingsPng from "./Assets/main-assets/more-vertical.png";
import LikePng from "./Assets/main-assets/thumbs-up.png";
import LikedPng from "./Assets/main-assets/liked.png";
import LovePng from "./Assets/main-assets/heart.png";
import CommentPng from "./Assets/main-assets/message-square.png";
import ViewsPng from "./Assets/main-assets/eye.png";

export const links = [
  {
    name: "Home",
    path: "/home",
  },

  {
    name: "About",
    path: "/about",
  },

  {
    name: "Find Model",
    path: "/find-model",
  },

  {
    name: "Job Post",
    path: "/jobpost",
  },

  {
    name: "Magazine",
    path: "/magazine",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

export const clientTestimonial = [
  {
    id: 1,
    image: TestimonialImg,
    alt: "client-1",
    name: "Joy Chidima",
    title: "CEO PMA",
    desc: " “Iam so happy i found premium models app, scouting for models has been so easy for me”",
  },

  {
    id: 2,
    image: TestimonialImg,
    alt: "client-2",
    name: "Joy Chidima",
    title: "CEO PMA",
    desc: " “Iam so happy i found premium models app, scouting for models has been so easy for me”",
  },

  {
    id: 3,
    image: TestimonialImg,
    alt: "client-3",
    name: "Joy Chidima",
    title: "CEO PMA",
    desc: " “Iam so happy i found premium models app, scouting for models has been so easy for me”",
  },

  {
    id: 4,
    image: TestimonialImg,
    alt: "client-4",
    name: "Joy Chidima",
    title: "CEO PMA",
    desc: " “Iam so happy i found premium models app, scouting for models has been so easy for me”",
  },
];

export const Jobpostcard = [
  {
    id: 1,
    img: Jobimg1,
    button: "featured",
    text: "Fashion brand needs models - N65,000",
  },

  {
    id: 2,
    img: Jobimg2,
    button: "featured",
    text: "Fashion brand needs models - N65,000",
  },

  {
    id: 3,
    img: Jobimg3,
    button: "featured",
    text: "Fashion brand needs models - N65,000",
  },

  {
    id: 4,
    img: Jobimg4,
    button: "featured",
    text: "Fashion brand needs models - N65,000",
  },
];

export const Partners = [
  {
    id: 0,
    img: Partner1,
  },

  {
    id: 1,
    img: Partner2,
  },

  {
    id: 2,
    img: Partner3,
  },

  {
    id: 3,
    img: Partner4,
  },
];

export const TopProfiles = [
  {
    id: 1,
    avatar: Profile1,
    name: "Princess",
    title: "Model",
  },

  {
    id: 2,
    avatar: Profile2,
    name: "Princess",
    title: "Model",
  },

  {
    id: 3,
    avatar: Profile3,
    name: "Princess",
    title: "Model",
  },

  {
    id: 4,
    avatar: Profile4,
    name: "Princess",
    title: "Model",
  },

  {
    id: 5,
    avatar: Profile5,
    name: "Princess",
    title: "Model",
  },

  {
    id: 6,
    avatar: Profile6,
    name: "Princess",
    title: "Model",
  },
];

export const RecentlyActive = [
  {
    id: 1,
    avatar: Profile1,
    name: "Princess",
    title: "Model",
  },

  {
    id: 2,
    avatar: Profile2,
    name: "Princess",
    title: "Model",
  },

  {
    id: 3,
    avatar: Profile3,
    name: "Princess",
    title: "Model",
  },

  {
    id: 4,
    avatar: Profile4,
    name: "Princess",
    title: "Model",
  },

  {
    id: 5,
    avatar: Profile5,
    name: "Princess",
    title: "Model",
  },

  {
    id: 6,
    avatar: Profile6,
    name: "Princess",
    title: "Model",
  },
];

export const PostData = [
  {
    img: Post1dp,
    name: "Moyo Brown",
    time: "2mins ago",
    desc: "I love when i capture the moments of expression",
    postimg: "",
    like: LikePng,
    numberOfLikes: 47,
    liked: false,
    likedpng: LikedPng,
    love: LovePng,
    numberOfLoves: 56,
    loved: true,
    comment: CommentPng,
    numberOfComments: 18,
    view: ViewsPng,
    numberOfViews: 124,
    moresettings: MoreSettingsPng,
    message: MessageBoxPng,
    follow: UserPng,
    timeicon: ClockPng,
  },

  {
    img: Post2dp,
    name: "Emmanuel Abuzu",
    time: "45mins ago",
    desc: "Premium model app is the best models app you can find on the internet today. It provides advance features and interaction between models, modelling agency and clients, sign up to premium model app today",
    postimg: PostImg1,
    like: LikePng,
    numberOfLikes: 147,
    liked: true,
    likedpng: LikedPng,
    love: LovePng,
    numberOfLoves: 556,
    loved: false,
    comment: CommentPng,
    numberOfComments: 67,
    view: ViewsPng,
    numberOfViews: 654,
    moresettings: MoreSettingsPng,
    message: MessageBoxPng,
    follow: UserPng,
    timeicon: ClockPng,
  },

  {
    img: Post3dp,
    name: "Ayomide Daniel",
    time: "3hrs ago",
    desc: "Premium model app is the best models app you can find on the internet today. It provides advance features and interaction between models, modelling agency and clients, sign up to premium model app today",
    postimg: PostImg4,
    like: LikePng,
    numberOfLikes: 247,
    liked: true,
    likedpng: LikedPng,
    love: LovePng,
    numberOfLoves: 56,
    loved: false,
    comment: CommentPng,
    numberOfComments: 8,
    view: ViewsPng,
    numberOfViews: 54,
    moresettings: MoreSettingsPng,
    message: MessageBoxPng,
    follow: UserPng,
    timeicon: ClockPng,
  },

  {
    img: Post4dp,
    name: "Prince Chibuzo",
    time: "1 day ago",
    desc: "Premium model app is the best models app you can find on the internet today. It provides advance features and interaction between models, modelling agency and clients, sign up to premium model app today",
    postimg: PostImg3,
    like: LikePng,
    numberOfLikes: 247,
    liked: false,
    likedpng: LikedPng,
    love: LovePng,
    numberOfLoves: 56,
    loved: true,
    comment: CommentPng,
    numberOfComments: 8,
    view: ViewsPng,
    numberOfViews: 54,
    moresettings: MoreSettingsPng,
    message: MessageBoxPng,
    follow: UserPng,
    timeicon: ClockPng,
  },

  {
    img: Post5dp,
    name: "Stephenie Daniels",
    time: "1 day ago",
    desc: "your mind is a powerful place and what you feed in can affect you in some powerful way.",
    postimg: PostImg6,
    like: LikePng,
    numberOfLikes: 247,
    liked: false,
    likedpng: LikedPng,
    love: LovePng,
    numberOfLoves: 56,
    loved: true,
    comment: CommentPng,
    numberOfComments: 8,
    view: ViewsPng,
    numberOfViews: 54,
    moresettings: MoreSettingsPng,
    message: MessageBoxPng,
    follow: UserPng,
    timeicon: ClockPng,
  },
];

export const faqs = [
  {
    id: 1,
    question: "Do i have to accept all request?",
    answer:
      " Absolutely not, you are completely independent. That is to say you decide for yourself which request you wish to accept or decline.",
  },

  {
    id: 2,
    question: "How can i get jobs as a model?",
    answer:
      " Once you are logged in as a model, you will find a section 'job post' at the top of the menu, you can always browse and apply for available jobs. ",
  },

  {
    id: 3,
    question: "Where will i get Modeling Jobs?",
    answer:
      " You decide where you accept a job offer, either in your location or internationally.",
  },

  {
    id: 4,
    question: "Do i have to pay Premium Models when i am booked?",
    answer:
      "No, we are not a modeling agency, so you dont pay us any commission when booked.",
  },

  {
    id: 5,
    question:
      " I am an agency-represented model, can i be a newbook model too?",
    answer:
      " Yes, premium models welcomes both agency and freelance models. Our terms are non-exclusive. If you have an agency contract, it is your responsibility to make sure that the contract with your agency allows you to participate in the premium models community.",
  },

  {
    id: 6,
    question: "How to promote yourself using Premium Models.com",
    answer:
      "  As a creative designer, there are tons of branches in designing, eg. UI/UX design Graphic Design, Product Design, Infographics and many more...",
  },

  {
    id: 7,
    question: "How to become a model in the premium model app?",
    answer:
      "  I highly recommend students to start with MS Office package course, it's statistically the best computer training course for a newbie.",
  },

  {
    id: 8,
    question: "What is Premium Model and how does it work",
    answer:
      " Search engine optimization popularly known as (SEO) is the optimization of businesses, brands, webpages, social profile and informations to be visible on the search engine. This allows potential target audience to locate and interact with your business with ease.",
  },

  {
    id: 9,
    question: "Do i have to pay Premium Models when i am booked?",
    answer:
      " All our courses here at are totally free for anyone to enrol, the goal is to equipe quality techstars for the future economy.",
  },

  {
    id: 10,
    question: "How to network within Premim Models",
    answer:
      "Content marketing is the creation of creative, stunning and highend content for a brand or company through blog/article writing, social media post etc offers the best content marketing course on the internet",
  },
];
