console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

//Aufgabe 1
const onlyCardWithIdTwo = cards.filter((card) => card.id==="2");
console.log(onlyCardWithIdTwo, "test");

//Aufgabe 2
const allCardsWith3Tags = cards.filter((card)=> card.tags.length === 3);
console.log(allCardsWith3Tags);

//Aufgabe 3
const allCardsThatAreNotBookmarked = cards.filter((card)=>card.isBookmarked === false);
console.log(allCardsThatAreNotBookmarked);

//Aufgabe 4
const allCardsWithTagsHTMLOrJSThatAreBookmarked = null;

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
