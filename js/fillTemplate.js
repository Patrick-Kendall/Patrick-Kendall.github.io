// Improve ideas:
// 1. make all paragraphs objects with a "type" property; default type is "paragraph". Other type existing now is "quote"

// data for reviews
const reviews = [
  {
    title: "The Prince",
    author: "Niccolo Machiavelli",
    rating: "Difficult; short; lots of ancient history and Italian history",
    ratingColor: "Difficult",
    aboutAuthor: {
      paragraphs: [
        "Niccolo Machiavelli lives during the late 15th and early 16th centuries in Italy, which is not a pleasant time. Italy is broken into small kingdoms, many owned by foreign empires. The country is flooded with French troops and Spanish mercenaries. Handheld firearms are just beginning to play a decisive role in battle.",
      ],
      influenced: "Henry VIII, Bacon, Dumas, US Founding Fathers, many more ",
      influencedBy: "Plutarch, Aristotle, Plato, Dante, Da Vinci",
    },
    briefestSummary:
      "The most famous political work ever; a history of principalities; instructional booklet for rulers of principalities",
    majorPoints: {
      type: "enumerated",
      points: [
        "One must look at the world as it is, not as it ought to be.",
        "Princes who lie, manipulate, and are capable of cruelty are more successful than those who rely on loyalty; it is better to be feared than loved.",
        "Continual, <i>impetuous</i> activity is key to maintaining a state, not the adherence to a strict moral code. Rulers must act when necessary, in the mode that is necessary, as severely as necessary.",
        'The reputation of a prince is very important. His actions must be associated with "greatness, spiritedness, gravity and strength" , so that "no one thinks of deceiving or getting around him."',
      ],
    },
    additionalPoints: {
      exists: true,
      points: [
        "If one must commit evil, it is best to do it all at once instead of doling it out over a long period.",
        "whoever conspires cannot be alone, but cannot find company except from those he believes to be malcontents",
      ],
    },
    myTake: {
      paragraphs: [
        "I would not recommend this book to many people; it is challenging to read and requires a certain, perverse outlook to enjoy. However, it is part of history and is highly influential to subsequent political leaders. The author's personality is good, not great. His lack of moral pretense is refreshing and sets the stage for empiricism, modern-science, and much good to come.",
        "<i>The Prince</i> is revolutionary in that Machiavelli does not shy away from the idea that a prince may need to commit atrocities, lie, and break promises. He even intructs the prince on when and how to do so effectively. This lends to the popular notion that Machiavelli is evil. One quote stands out:",
        {
          type: "quote", // make all paragraphs objects in future
          text: "whoever becomes patron of a city accustomed to living free and does not destroy it, should expect to be destroyed by it",
        },
        "This is not so much an endorsement of the practice of destroying cities as it is a frank assessment of what one may expect. It is difficult to know what kind of person Machiavelli is, but from <i>The Prince</i> one can see that he is not a sadist; he is instead one with disdain for pretense and those who act on pretense.",
      ],
    },
  },
  {
    title: "Leviathan - Volume I",
    author: "Thomas Hobbes",
    rating: "Difficult; long",
    ratingColor: "Difficult",
    aboutAuthor: {
      paragraphs: [
        'Thomas Hobbes is a writer and physicist during the 1600\'s in England and France. He is most notable for his work: <i>Leviathan</i>. This book establishes the social-contract political theory and introduces the concept of inalienable human rights. <i>Leviathan</i> alone defines many western beliefs from Hobbes\'s time through the present. However, Hobbes is also a noted scientist and may have befriended Galileo, a contemporary of his in Italy. For more on Hobbes, I recommmend the <i> Stanford Encyclopedia of Philosophy</i> <a target="_blank" href="https://plato.stanford.edu/entries/hobbes/">here</a>.',
      ],
      influenced: "Hume, Locke",
      influencedBy: "Bacon, Galileo, Descartes, Machiavelli",
    },
    briefestSummary:
      "Renowned as the foundation of political science; a progressive work which broaches psychology, the nature of language, knowledge, and science",
    majorPoints: {
      type: "subdivided",
      divisions: [
        {
          heading: "Of the Nature of Man",
          points: [
            "Men are close to equal in physical strength; men are more-closely equal mentally than physically.",
            'There exists a "state of nature" where man has no property: you only own what you can hold, and only for as long as you can hold it. All disputes can be settled only through the sword.',
            'Doing to others as we would have done to us is against human nature and must be enforced by "terror of some power."',
          ],
        },
        {
          heading: "Of the Nature of Society",
          points: [
            'The foundation of a commonwealth is based on "covenants." The sovereign power is exactly the terror described above. The sovereign power is judge over the commonwealth and replaces the sword in settling disputes.',
            'Defines unjust as solely the breaking of a "covenant." Anything which is not the breaking of a covenant is just.',
            "Humans have an inalienable right of self preservation which cannot be given up. Promises proceeding from fear of death are not covenants.",
            "A commonwealth is granted by free consent; dominion is granted by promise on fear of death or violence.",
          ],
        },
        {
          heading: "Of the Nature of Soveriegn Government",
          points: [
            "Suggests a sovereign monarch or assembly is not bound by any covenant with the people; the sovereign cannot breach covenant with the people and cannot be dismissed on such grounds.",
            'Suggests government has the right to produce truth: "regular instruction of the populace as to the truth and standard of law is beneficial to a society."',
            "Defines commonwealth as three forms: monarchy, aristocracy, and democracy; all other words used to describe government fall within these three forms.",
          ],
        },
      ],
    },
    additionalPoints: {
      exists: true,
      points: [
        "Every serious conversation about the world must begin with clear definitions.",
        "Defines many words and phrases in the early part of the book which are worth reading. For instance:",
        {
          type: "quote",
          text: "Ignorance of the signification of words; which is, want of understanding, disposeth men to take on trust, not only the truth they know not; but also the errors; and which is more, the nonsense of them they trust.",
        },
        "Insane people cannot be held to the standard of law because they cannot comprehend the law and therefore cannot agree to it",
        "We owe fealty to the people who provide us sustenance. The mother is the person to whom a child owes fealty. The father is owed fealty only if he sustains the mother.",
        "One state subjugating another is invariably a monarchy over the subjugated state, i.e. the Roman republic (a type of aristocracy) subjugating its provinces is a republic acting as a monarchy over the provinces.",
        "Suggests the argument against monarchy is sophistical: suggesting that subjects of a monarchy are slaves is sophistical.",
      ],
    },
    myTake: {
      paragraphs: [
        "I recommend this book to someone who is looking for a serious study; taking notes or rereading is necessary as this is a dense book. However, at the end you will have gained a lot. There is much more than political philosophy in this book.",
        " One sees this in modern-day law, science and cultural norms. In one work, Hobbes lays out much of the heavy lifting for the following centuries. For example, one quote from the book reveals a keen view of the nature of human knowledge:",
        {
          type: "quote", // make all paragraphs objects in future
          text: "No discourse whatsoever can end in absolute knowledge of fact ... as for the knowledge of fact, it is originally sense, and ever after memory. ... it is not absolute, but conditional. No man can know by discourse that this, or that, is, has been, or will be; ... but only that if this be, that is; if this has been, that has been; if this shall be, that shall be; which is to know conditionally: and that not the consequence of one thing to another, but of one name of a thing to another name of the same thing.",
        },
        "In terms of political philosophy, <i>Leviathan</i> is groundbreaking in that it begins the <i>social-contract theory</i>. This theory is grounded in the idea that government and society is founded by a covenant, or agreement, between citizens. From this, all justice and law is developed; where law constitutes an agreement between all citizens.",
        "The enduring nature of Hobbes's work lies in his definition of unjust. Justice is in most cases undefined. However, Hobbes provides a simple and consistent method of determining just behavior. Unjust is the breaking of a covenant; all else is just. This remains one pillar of US law. It sometimes creates controversy where no law is broken, but there is a severe ethical incursion. For example, the sub-prime mortgage crisis in 2008.",
        'Another topic which frequently appears in <i>Leviathan</i> is the notion of authority and trust. Hobbes continually warns: don\'t trust the "authority of books," don\'t trust the "authority of an Aristotle," don\'t trust the "authority and good opinion we have of him that hath said it." He suggests that there is a position below ignorance; he calls it: <i>as much below the condition of ignorant men as men indued with true science are above it.</i> He is talking about those who believe something false because they gave authority to someone else, those who<i> "follow the blind blindly."</i> I feel that today science has become too complicated and the world too big to give authority to no one. Still, it is a valuable warning.',
      ],
    },
  },
  {
    title: "Social Contract",
    author: "Jean-Jacques Rousseau",
    rating: "Moderate",
    ratingColor: "Moderate",
    aboutAuthor: {
      paragraphs: [
        'Jean-Jacques Rousseau wrote about moral and political philosophy and lived in the Republic of Geneva. Geneva was a small nation state for more than 250 years before being annexed by France. The city is now part of Switzerland. Refer to the <a href="https://plato.stanford.edu/entries/rousseau/">Stanford Encyclopedia of Philosophy</a> for more on Rousseau.',
      ],
      influenced: "Kant, Thoreau",
      influencedBy: "Diderot, Hobbes, Machiavelli",
    },
    briefestSummary: "Moral and political thought underlying pure democracy",
    majorPoints: {
      type: "subdivided",
      divisions: [
        {
          heading: "Of the Nature of Government",
          points: [
            "We should view all governments as temporary.",
            "All laws may be revoked; all aspects of government may be revoked/modified.",
            "The only law which demands unanimous consent is the contract of association. Those who oppose associating should be excluded from the State. However, residence implies consent.",
          ],
        },
        {
          heading: "Of the Nature of Sovereign Government",
          points: [
            "A majority vote is binding on all and this constitutes sovereignty.",
            "Government is distinct from sovereignty. Government will inevitably try to usurp sovereignty. This necessitates periodic assemblies; so that government cannot lawfully suppress the people overthrowing it.",
            'There should be a third part of government called "tribunate". The tribunate is neither executive nor legislative. It can not start anything, but may stop anything according to law.',
          ],
        },
        {
          heading: "An Empirical View of Government",
          points: [
            "<i>Man is born free and everywhere he is in chains</i>",
            "There exist national characteristics which make states more suitable to a specific form of government; examples include population size, average temperature, terrain.",
          ],
        },
      ],
    },
    additionalPoints: {
      exists: true,
      points: [
        "Executive power is naturally separate from legislative in that legislative deals in general acts while executive deals with specific acts.",
      ],
    },
    myTake: {
      paragraphs: [
        "I recommmend this book. This book contains ideas which define American government. It also contains neglected ideas. Among these, that government is inherently temporary, and that all laws may be revoked. ",
        "Rousseau argues that pure democracy is the single valid form of government. He suggests that a representative democracy, such as the U.S., is a form of slavery. In the time between elections, citizens of the U.S. exist in a state of slavery, where voting and executive power are out of their hands. According to Rousseau, real democracy would have periodic meetings between all citizens. Meetings at which laws may be changed. He acknowledges that meetings between all citizens become difficult in the case of multiple-city states.",
        "The quote, <i>man is born free and everywhere he is in chains,</i> represents an interesting argument made by Rousseau. Critics of Rousseau's logic would point at people living under bad government and claim it disproves his theory. At this time almost all the world lived under feudalism, monarchy or empire. Rousseau suggests his critics are making a base and logically unsound argument. This is best expressed in the quote.",
      ],
    },
  },
  {
    title: "Civil Disobedience",
    author: "Henry David Thoreau",
    rating: "Easy; short",
    ratingColor: "Easy",
    aboutAuthor: {
      paragraphs: [
        "Henry David Thoreau was a Massachusetts native who advocated living simply with nature. He is perhaps best known for writing <i>Walden</i>. He was a transcendentalist and therefore assigned the highest value to the individual. He expresses anti-government views in <i>Civil Disobedience</i>, but his views are not easily classified in today's political terms. He hated slavery, unjust war, and advocated protecting the environment.",
        "Harriet Beecher Stowe is believed not to have read Thoreau's works. This is interesting as they lived in Massachusetts at the same time and her book, <i>Uncle Tom's Cabin (1852)</i>, shares themes and social criticisms with <i>Civil Disobedience</i>.",
      ],
      influenced: "Gandhi, King, Tolstoy, Hemingway",
      influencedBy: "Rousseau, Darwin, Hawthorne, the Mahabharata",
    },
    briefestSummary:
      'Complete denouncement of government and the contemporary American government; rooted in disgust of enslaving "one sixth" of the country\'s population',
    majorPoints: {
      type: "enumerated",
      points: [
        'The government is distinct from the general will and can be "abused and perverted" before the people can act through it.',
        "A government in which the majority rules in all cases cannot be based on justice.",
        "If the law requires you to do an injustice to someone else, you should break the law.",
        "One who morally objects to the government must withdraw their support by not paying taxes and generally not recognizing the government. One quote adds to this premise:",
        {
          type: "quote",
          text: "A minority is powerless while it conforms to the majority ... but it is irresistible when it clogs by its whole weight.",
        },
        'Government should have an alternative to living as part of the lawful society. One should be allowed to not follow the laws so long as one fulfills duties of "neighbors and fellow-men."',
      ],
    },
    additionalPoints: {
      exists: false,
      points: [],
    },
    myTake: {
      paragraphs: [
        "Much of the first pages strike me as disagreeable or outdated. However, parts of this essay are enduring and beautiful. Thoreau is torn between living honestly or tacitly participating in slavery and war. Paying taxes is seen as participating in the actions of government. To avoid participating in evil, one must withdraw from the social-contract government one is born into. Thoreau goes so far as to advocate breaking the law whenever it requires you to do an injustice on another person.",
        "This is the enduring mandate given in the work. Subsequent civil disobedience has resulted in positive changes across the globe. The problem with Thoreau's justice is that it is fundamentally subjective. For example, one may feel that access to abortion is a civil or human right. However, another may feel that abortion is an \"injustice\" as defined by Thoreau. If the latter person follows Thoreau's mandate, to disobey the law and even clog the government with their full weight, the government may well grind to a halt. This halting is a consequence of an objection to settled law and a topic which is morally ambiguous, as are all topics. How then does the individual reconcile a sincere difference in conscience between a majority and a minority?",
        "One must go back to the Hobbesian notion of judging only by the sword, as was the case for slavery during the Civil War. Thoreau suggests that rule by the majority is simply rule by who is physically the strongest. He points out how law can be and is used to benefit a small group. One quote reveals Thoreau's understanding and contempt for law:",
        {
          type: "quote",
          text: "The lawyer's truth is not Truth, but consistency, or a consistent expediency.",
        },
        "Thoreau seems to believe in capital-t Truth and an objective form of justice; the idea which, for those who desire expediency, is so troubling. However, he points out a real and persistent flaw in democracy: legislators may not represent the people and<i> undue respect for the law</i> can lead to horrific circumstances occurring and continuing. He argues the individual conscience must be allowed to prevail over the rule of law.",
        "I worry that this book's anti-government propositions may be used out of context to argue for the modern-day anti-government school of thought. Thoreau's sentiments clearly stem from a hatred of the practice of slavery. In context, Thoreau's work is necessary, but out of context it is powerful and ambiguous. He claims that he seeks a reason for paying his taxes every year and cannot justify it. Much of the current movement is not comparable to this, and modern-day motivations may even be abhorrent to Thoreau. His ideas may be used by those who use other people's personalities to justify their own bad or selfish decisions.",
      ],
    },
  },
];

// dictionary for rating colors
const colorDict = {
  Difficult: "A20",
  Moderate: "f56c42",
  Easy: "008000",
};

// create formatted string from review object
let reviewStrings = [];

reviews.forEach((review) => {
  reviewStrings.push(createStringFromJson(review));
});

// create new dom parser
const parser = new DOMParser();

// get website DOM container element
const container = document.getElementById("myContainer");

// parse review strings to html documents
let reviewDocuments = [];
reviewStrings.forEach((review) => {
  reviewDocuments.push(parser.parseFromString(review, "text/html"));
});

// Add to DOM
let reviewDiv;
reviewDocuments.forEach((reviewDocument) => {
  // retrieve div from document
  reviewDiv = reviewDocument.querySelector(".review");

  container.append(reviewDiv);
});

// create TOC
let listItem;
let listLink;
const tableOfContentsUnorderedList = document.querySelector(".TOC-list");

reviews.forEach((review) => {
  listItem = document.createElement("li");
  listItem.className += "TOC-item";

  listLink = document.createElement("a");
  listLink.href = `#${review.title.replace(/\s/g, "")}`;
  listLink.textContent = review.title;

  listItem.appendChild(listLink);

  tableOfContentsUnorderedList.appendChild(listItem);
});

// ------------------- FUNCTIONS -------------------------------------------------------------------------------------

function createStringFromJson(data) {
  let html = "";

  // Add:
  // review container,
  // hyperlink from table of contents,
  // review header
  html += `<div class="review"><a name="${data.title.replace(
    /\s/g,
    ""
  )}" class="anch"></a>
        <div class="review-header">
          <h1>${data.title}</h1>
          <div class="myTake-link">
          <a href="#myTake${data.title.replace(/\s/g, "")}">My Take</a>
          </div>
        </div>`;

  // Add:
  // review rating
  html += `<div class="review-rating" style="background-color: #${
    colorDict[data.ratingColor]
  };">${data.rating}</div>`;

  // Add About Author section
  html += `<div class="sectionHeader">About the Author</div>`;

  data.aboutAuthor.paragraphs.forEach((paragraph) => {
    html += `<div class="paragraph">
          <p class="discussion-text"> ${paragraph}</p>
        </div>`;
  });

  // Influenced By / Influenced
  html += `<div class="paragraph">
          <p class="inline-heading">Influenced by:</p>
          <p class="discussion-text"> ${data.aboutAuthor.influencedBy}</p>
        </div>
        <div class="paragraph">
          <p class="inline-heading">Influenced:</p>
          <p class="discussion-text">${data.aboutAuthor.influenced} </p>
        </div>`;

  // Add Briefest Summary
  html += `<div class="sectionHeader">Briefest Summary of the Work</div>
        <div class="paragraph"> ${data.briefestSummary} </div>`;

  // Add Major Points
  html += '<div class="sectionHeader">Major Points</div>';

  // add major points to html using different generation functions for different types of major point structure
  switch (data.majorPoints.type) {
    case "enumerated":
      html += majorPointsEnumerated(data.majorPoints.points);
      break;
    case "subdivided":
      html += majorPointsSubdivided(data.majorPoints.divisions);
      break;
  }

  // Add Additional Points
  if (data.additionalPoints.exists === true) {
    html += '<div class="sectionHeader">Selected Additional Points</div>';

    data.additionalPoints.points.forEach((point) => {
      html += dealWithParagraphOrQuote(point);
    });
  }

  // Add My Take
  html += `<div class="myTake-header"><p>My Take </p><a name="myTake${data.title.replace(
    /\s/g,
    ""
  )}" class="take-anch"></a></div>`;

  data.myTake.paragraphs.forEach((paragraph) => {
    html += dealWithParagraphOrQuote(paragraph);
  });

  html += "</div>";
  return html;
}

// generate major points using enumeration 1,2,3,... without subdivisions or headings
function majorPointsEnumerated(points) {
  let majorPointCount = 1;
  let html = "";

  points.forEach((point) => {
    switch (typeof point) {
      case "object":
        html += `<div class="premise-quotation">${point.text} </div>
`;
        break;
      default:
        html += `<div class="paragraph">
          <p class="premise-num">${majorPointCount}. </p>
          <p class="premise-text"> ${point} </p>
        </div>`;

        majorPointCount++;
    }
  });

  return html;
}

// generate major points using subdivisions with headings, and number of premise with 1.a, 1.b, 2.a, ...
function majorPointsSubdivided(divisions) {
  let html = "";

  let divisionCount = 1;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  divisions.forEach((division) => {
    html += `<div class="paragraph">
          <p>${division.heading}</p>
        </div>`;
    let pointCounter = 0;
    division.points.forEach((point) => {
      html += `<div class="paragraph">
          <p class="premise-num"> ${divisionCount}.${alphabet[pointCounter]}</p>
          <p class="premise-text"> ${point}</p>
        </div>`;
      pointCounter++;
    });
    divisionCount++;
  });

  return html;
}

// two types of paragraph exist. normal and quotation. Should I treat all paragraph as object with "type" property? default type paragraph.
function dealWithParagraphOrQuote(paragraph) {
  let html = "";
  // two types of paragraph exist. normal and quotation. Should I treat all paragraph as object with "type" property? default type paragraph.
  switch (typeof paragraph) {
    case "object":
      html += `<div class="quotation">${[paragraph.text]}
        </div>`;
      break;
    default:
      html += `<div class="paragraph">
          <p class="discussion-text"> ${paragraph} </p>
        </div>`;
      break;
  }

  return html;
}
