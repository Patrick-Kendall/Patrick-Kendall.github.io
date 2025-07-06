// Improve ideas:
// 1. make all paragraphs objects with a "type" property; default type is "paragraph". Other type existing now is "quote"

// data for reviews
const reviews = [
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    rating: "Moderate; very long",
    ratingColor: "Moderate",
    aboutAuthor: {
      paragraphs: [
        "Leo Tolstoy was born into an aristocratic Russian family and owned serfs. He fought in the Crimean War.",
        "Tolstoy's philosophy is complicated. He was a Christian and a pacifist. He was also anti-church and anti-government, to the point that some refer to him as an anarchist. Tolstoy was excommunicated by the Russian Orthodox church late in his life. Yet, he was an enthusiastic Christian.",
      ],
      influenced: "Gandhi, Lenin, Hemingway",
      influencedBy: "Schopenhauer, Proudhon, Hugo, Thoreau",
    },
    briefestSummary:
      "Philosophical masterpiece; discusses everything from war strategy to religious doubts to a unique portrayal of existentialism.",
    briefSummary: {
      paragraphs: [
        `Pierre Bezukhov is the main character. Pierre is the son of a rich
          count and is well educated abroad. Pierre begins the story as an
          atheist. He falls into a large amount of money and marries a
          gorgeous but wicked woman named H&eacutel&egravene.
          H&eacutel&egravene is rumored to be having an affair and Pierre
          challenges the man to a duel against his better judgement. He wounds
          the man and leaves H&eacutel&egravene.`,
        `          Around this time Pierre meets with his friend Prince Andrei
          Nikolayevich Bolkonsky, another major character in the book.
          Bolkonsky is married to a delightful, small woman named Lisa. He is
          dissatified with their relationship and ends up leaving her pregnant
          with his father to join the army. He joins the army in preparation
          for the 1805 Battle of Austerlitz, in which Napoleon acheives a
          heroic victory against a larger Austrian and Russian army. A treaty
          is signed and Austria cedes much of its territory to France.`,
        `          Bolkonsky is wounded and captured by the French. He returns home to
          find his wife dying in childbirth. He then meets with Pierre and
          discusses freeing the serfs they own. Pierre insists on freeing and
          educating the serfs as a matter of principle, based on his Freemason
          beliefs. Bolkonsky is more empathetic, pointing at a serf and
          stating: "you want to make him what I am, without giving him my
          means." In the end Pierre does not succeed in freeing his serfs,
          while Bolkonsky frees a few hundred and provides them a means to
          sustain themselves. This is characteristic of the two characters.`,
        `          The plot continues with Pierre taking H&eacutel&egravene back.
          Bolkonsky visits St. Petersburg and meets Natasha Rostova. Natasha,
          her brother Nikolai, and the Rostov family are the other major
          storyline. The Rostovs are a rich family whose finances are in bad
          shape due to mismanagement and the son's gambling. Bolkonsky
          proposes to Natasha, but his father objects and delays the marriage.
          Natasha then breaks their engagement after being seduced by
          H&eacutel&egravene's brother. The brother is previously married to a
          woman he abandoned in Poland. When Natasha learns of this, she
          attempts suicide.`,
        `          A French army marches into Russia and threatens to reach the
          Bolkonsky estate. Nikolai Rostov rescues Bolkonsky's sister after
          her father passes away. The book then focuses on Napoleon, his army,
          and his lieutenants. As the French approach Moscow, Pierre raises a
          militia and joins the Russian army; Bolkonsky again serves as an
          officer. The 1812 Battle of Borodino is a climactic moment. The
          Russian army stands up to the invincible French and both sides
          receive heavy casualties. The Russians end up withdrawing, giving
          the French an indecisive victory.`,
        `          The Russian army retreats through Moscow to the countryside. The
          French army follows and occupies Moscow. At some point, Moscow burns
          to the ground. It is unknown whether the French or Russians started
          the fires. The Rostov family escape Moscow with carts full of
          wounded soldiers instead of their belongings. Pierre remains in
          Moscow and decides to assassinate Napoleon. He instead fights with
          looting French soldiers and is arrested.`,
        `          The French army is forced to retreat and takes Pierre with it. The
          retreat from Moscow in the middle of winter is a disaster;
          starvation, disease and desertion annihilate the French army. Pierre
          befriends a peasant, Platon Karataev, in captivity. Platon is then
          shot by the French. Pierre's philosophical musings come to a head
          during the retreat. Pierre is rescued by Russian soldiers led by the
          man he wounded in his duel.`,
        `          Bolkonsky is among the wounded soldiers carted off by the Rostovs.
          He sees Natasha, forgives her for breaking their engagement, and
          then dies. Pierre's wife H&eacutel&egravene dies of an overdose.
          Pierre and Natasha rekindle a romance from earlier and get married.`,
        `          In the first of two epilogues, the story is wrapped up, with Nikolai
          Rostov marrying Bolkonsky's sister and resolving his family's debts.
          The second epilogue is a philosophical discussion. Tolstoy indicates
          that all actions are to degrees a combination of free-will and
          necessity. He challenges the notion that history is written by great
          individuals, i.e. Napoleon; instead suggesting that much of those
          person's actions are dictated by thousands of small events and
          therefore necessity. While only a small portion is due to the free
          will of the individual.`,
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
        `          This book covers the other war of 1812: Napoleon's invasion of
          Russia. Interestingly, the book discusses women's rights and the
          abolition of slavery, called serfdom in Russia. However, I would not
          recommend this book to many people.`,
        `          The story in this book is excellent. However, the philosophy is what
          makes it legendary. At its best, the philosophy is discussed
          casually and makes powerful statements about Russian society and the
          nature of human relationships. At its worst, the imagery is
          difficult to understand and is longer than is enjoyable to read.
          Even so, the book is always well written.`,
        `          Pierre's struggles with his faith play a big role in this book. They
          set the stage for the highly philosophical later chapters. One
          notable moment comes when Pierre first encounters a Freemason.
          Pierre suggests his disbelief in God and says his way of looking at
          the world is opposed to that of the Masons. The Mason responds:`,
        {
          type: "quote", // make all paragraphs objects in future
          text: `        I know your outlook, and the view of life you mention, and which you
        think is the result of your own mental efforts, is the one held by the
        majority of people, and is the invariable fruit of pride, indolence,
        and ignorance . . . Your view of life is a regrettable delusion.`,
        },
        `          Tolstoy suggests in his other epic, <i>Anna Karenina</i>, that
          students of what was then called the "natural sciences," which we
          now simply call science, were unjustly dismissed as nihilists.
          Tolstoy suggests something similar about followers of religion.
          Religious people may be unjustly dismissed as unreasonable, when in
          fact assuming they have not realized the alien nature of the
          existence of God is the error. Between atheism, agnostisism and
          religion, it is a matter of choice, and of little consequence unless
          one believes in eternal damnation.`,
        `          Another quote is revealing of Tolstoy's personality and his writing
          style:`,
        {
          type: "quote", // make all paragraphs objects in future
          text: `        To Bolkonsky so many people appeared contemptible and insignificant
        creatures, and he so longed to find in someone the living ideal of a
        perfectly rational and virtuous man. Had Speransky sprung from the
        same class . . . Bolkonsky would soon have discovered his weak, human,
        unheroic sides.`,
        },
        `          Speransky is a military officer Bolkonsky just met. Later in the
          book, he sees Speransky's weak, human side.`,
      ],
    },
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    rating: "Easy; very long",
    ratingColor: "Easy",
    aboutAuthor: {
      paragraphs: [
        "Leo Tolstoy was born into an aristocratic Russian family and owned serfs. He fought in the Crimean War.",
        "Tolstoy's philosophy is complicated. He was a Christian and a pacifist. He was also anti-church and anti-government, to the point that some refer to him as an anarchist. Tolstoy was excommunicated by the Russian Orthodox church late in his life. Yet, he was an enthusiastic Christian.",
      ],
      influenced: "Gandhi, Lenin, Hemingway",
      influencedBy: "Schopenhauer, Proudhon, Hugo, Thoreau",
    },
    briefestSummary:
      "Two concurrent romantic masterpieces with commentary on the good life, and indescribable scenes",
    briefSummary: {
      paragraphs: [
        `          The novel follows two storylines: one centered around Konstantin
          Levin, and a second which switches its focus between Alexei Vronsky
          and Anna Karenina.`,
        `          I will not summarize the book as it would be a large task. I
          recommend reading the book itself as it is an easy read.`,
      ],
    },
    myTake: {
      paragraphs: [
        `          This book is phenomenal. It is rightly considered the greatest book
          of all time. If you do not have the time to read the book, I have
          heard the movie is also excellent.`,
        `          What makes this book, and Tolstoy's work generally, so special is
          the precise, psychological description of small characters. Small
          characters, such as the portraitist who paints Anna in Italy, are
          used to send messages about human nature. This is accomplished in a
          short amount of writing, then the character disappears.`,
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
  html += '<div class="sectionHeader">Brief Summary</div>';

  data.briefSummary.paragraphs.forEach((paragraph) => {
    html += dealWithParagraphOrQuote(paragraph);
  });

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
