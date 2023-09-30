

// const lessons = [
//     {
//         title: "A2/ Unit 4 Review 1",
//         description: "review of first section",
//         content: {}
//         }]

// export default lessons;

// type page = {
//     title: string;
// }
type section = {
    sectionHeading: string;
    bulletPoints?: string[];
    text?: string;
}

type Content = {
    [pageNumber: number]: {
        title: string;
        imageSrc?: string;
        [section: number]: section;
        Audio?: string;
    }
}

const content: Content = {
    1: {
        title: "Section 1. Lesson Objectives",
        imageSrc: "https://tf-curriculum-materials.s3-eu-west-1.amazonaws.com/LP/B2/Ready+images/Part+6/first-things-word-made-square-letter-1410447332+(1).jpg",
        1: {

            sectionHeading: "Communication focus",
            bulletPoints: [
                "Personal questions",
                "Daily routines",
                "Requests"
            ],
        },
        2: {

            sectionHeading: "Grammar focus",
            bulletPoints: [
                "Wh- Questions",
                "Present Simple",
                "Present Continuous",
                "Time Expressions",
                "‘Can’ for requests"
            ],
        },
        3: {
        sectionHeading: "Pronunciation focus",
        bulletPoints: [
            "Wh- sound /w/",
            "schwa /ə/ ",
            "American vs. British pronunciation"
        ],
    },
    
    // }
},
2: {
    title: "Section 2. Listen: The Adventures of Kate",
    imageSrc: "https://tf-curriculum-materials.s3-eu-west-1.amazonaws.com/LP/A2/Ready+images/hispanic-man-black-beard-white-shirt-1251212518+(1).jpg",
    Audio: "https://tf-curriculum-materials.s3-eu-west-1.amazonaws.com/LP/A2/Ready+audio/Unit+1/Unit+1+Audio+1.1.mp3",

}
}

export default content;

// Section 2. Listen: The Adventures of Kate
// Conversation Audio!
// Source - https://tf-curriculum-materials.s3-eu-west-1.amazonaws.com/LP/A2/Ready+images/hispanic-man-black-beard-white-shirt-1251212518+(1).jpg
// Unit 1 Audio
// Meet the Team!
// About Andrew
// Unit 2 Audio
// Let’s Get Together
// Unit 3 Audio
// Can You Help Me?

