export const chats = [
  {
    id: 1,
    user: {
      name: "Sahara Ardia Fadia",
      image: require("../assets/images/message/chat/profile1.png"),
    },
    lastMessage: { message: "Okay see you soon", createdAt: "12:32 AM" },
    unseen: 2,
  },
  {
    id: 2,
    user: {
      name: "Sahara Ardia Fadia",
      image: require("../assets/images/message/chat/profile2.png"),
    },
    lastMessage: { message: "Okay see you soon", createdAt: "12:32 AM" },
    unseen: 0,
  },
  {
    id: 3,
    user: {
      name: "Sahara Ardia Fadia",
      image: require("../assets/images/message/chat/profile3.png"),
    },
    lastMessage: { message: "Okay see you soon", createdAt: "12:32 AM" },
    unseen: 0,
  },
  {
    id: 4,
    user: {
      name: "Sahara Ardia Fadia",
      image: require("../assets/images/message/chat/profile4.png"),
    },
    lastMessage: { message: "Okay see you soon", createdAt: "12:32 AM" },
    unseen: 0,
  },
  {
    id: 5,
    user: {
      name: "Sahara Ardia Fadia",
      image: require("../assets/images/message/chat/profile5.png"),
    },
    lastMessage: { message: "Okay see you soon", createdAt: "12:32 AM" },
    unseen: 0,
  },
  {
    id: 6,
    user: {
      name: "Sahara Ardia Fadia",
      image: require("../assets/images/message/chat/profile6.png"),
    },
    lastMessage: { message: "Okay see you soon", createdAt: "12:32 AM" },
    unseen: 0,
  },
  {
    id: 7,
    user: {
      name: "Sahara Ardia Fadia",
      image: require("../assets/images/message/chat/profile7.png"),
    },
    lastMessage: { message: "Okay see you soon", createdAt: "12:32 AM" },
    unseen: 0,
  },
];

export const inboxMessages = [
  { id: 1, user: { id: 1 }, message: "Hi! How are you?" },
  { id: 2, user: { id: 2 }, message: "Hello! I’m doing well. What about you?" },
  {
    id: 3,
    user: { id: 1 },
    message: "Doing great! Let’s go on a date somewhere!",
  },
  {
    id: 4,
    user: { id: 2 },
    message: "Sounds great! Let me know your availability",
  },
  {
    id: 5,
    user: { id: 1 },
    message: "Available on upcoming days",
  },
  {
    id: 6,
    user: { id: 2 },
    message:
      "oh splendid! let me search the best place and i’ll let you know ASAP",
  },
];

export const botConversations = [
  { id: 1, message: "Hi! How can i help you?", isBot: true },
];

export const botAssistantQuestions = [
  {
    question: "Refine matches",
    response:
      "Sure, let's refine your matches. What criteria would you like to adjust?",
    icon: require("../assets/icons/bot/assistant/icon1.png"),
  },
  {
    question: "Update settings",
    response: "No problem! What settings would you like to update?",
    icon: require("../assets/icons/bot/assistant/icon2.png"),
  },
  {
    question: "Schedule response time",
    response:
      "When would you like to schedule a response time? Please provide the date and time.",
    icon: require("../assets/icons/bot/assistant/icon3.png"),
  },
  {
    question: "Setup reminder",
    response:
      "Got it! What reminder would you like to set up and when should I remind you?",
    icon: require("../assets/icons/bot/assistant/icon4.png"),
  },
];

export const homeItems = [
  {
    id: 1,
    image: require("../assets/images/home/items/img1.png"),
    name: "Jennifer Anderson",
    country: "New York",
    age: 24,
    about:
      "An accomplished technology entrepreneur, innovator, and thought leader",
  },
  {
    id: 2,
    image: require("../assets/images/home/items/img2.jpg"),
    name: "Michael Smith",
    country: "California",
    age: 30,
    about: "A creative graphic designer with a passion for visual storytelling",
  },
  {
    id: 3,
    image: require("../assets/images/home/items/img3.jpg"),
    name: "Sarah Johnson",
    country: "Texas",
    age: 28,
    about:
      "A skilled software developer with a focus on mobile application development",
  },
  {
    id: 4,
    image: require("../assets/images/home/items/img4.jpg"),
    name: "David Brown",
    country: "Florida",
    age: 35,
    about:
      "An experienced project manager with expertise in agile methodologies",
  },
  {
    id: 5,
    image: require("../assets/images/home/items/img5.jpg"),
    name: "Kristina Jackson",
    country: "Washington",
    age: 27,
    about:
      "A marketing specialist with a knack for creating compelling content",
  },
];
