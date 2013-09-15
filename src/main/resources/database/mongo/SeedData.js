// Subjects 
db.subjects.insert({
	description : "Reading",
	code : "Reading"
})
db.subjects.insert({
	description : "Grammar & Punctuation",
	code : "Grammar_Punctuation"
})
db.subjects.insert({
	description  : "Numeracy",
	code : "Numeracy"
})
db.subjects.insert({
	description  : "Persuasive Writing",
	code : "Persuasive_Writing"
})
db.subjects.insert({
	description  : "Spelling",
	code : "Spelling"
})

db.schools.insert({

	name : "St. Victor College",
	code : "stvc"
})

db.schools.insert({

	name : "Adelong Public school",
	code : "Adps"
})

db.schools.insert({

	name : "Albert Park Public School",
	code : "apps"
})

db.schools.insert({

	name : "Albury High School",
	code : "alhs"
})

db.schools.insert({

	name : "Balmian Public School",
	code : "baps"
})

db.schools.insert({

	name : "Bankstown Girls High School",
	code : "bghs"
})

db.schools.insert({

	name : "Cambridge Park High School",
	code : "cphs"
})

db.schools.insert({

	name : "Camden High School",
	code : "cahs"
})

db.schools.insert({

	name : "Dawson Public School",
	code : "daps"
})

db.schools.insert({

	name : "Dudley Public School",
	code : "dups"
})

db.schools.insert({

	name : "Eastwood Public School",
	code : "ewps"
})

db.schools.insert({

	name : "Evans High School",
	code : "evhs"
})

db.schools.insert({

	name : "Fairfield High School",
	code : "ffhs"
})

db.schools.insert({

	name : "Franklin Public School",
	code : "frps"
})

db.schools.insert({

	name : "Georges Hall Public School",
	code : "ghps"
})

db.schools.insert({

	name : "Gordon West Public School",
	code : "gwps"
})

db.schools.insert({

	name : "Helensburg Public School",
	code : "hbps"
})

db.schools.insert({

	name : "Hunters Hill High School",
	code : "hhhs"
})

db.schools.insert({

	name : "Johns River Public School",
	code : "jrps"
})

db.schools.insert({

	name : "Kendall Public School",
	code : "keps"
})

db.schools.insert({

	name : "Lawrence Public School",
	code : "laps"
})

db.schools.insert({

	name : "Liverpool Girls High School",
	code : "lghs"
})

db.schools.insert({

	name : "Maitland High School",
	code : "mlhs"
})

db.schools.insert({

	name : "Milton Public School",
	code : "mips"
})

db.schools.insert({

	name : "Newcastle High School",
	code : "nchs"
})

//Results

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "stvc"}),
    latestY3                : 56.88,  
    latestY5                : 23.97,
    latestY7                : 340.76,
    latestY9                : 670.89,
    rawGainY3Y5          : 780.80,
    factoredGainY3Y5      : 804.56,
    glgY3Y5              : 8.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "Adps"}),
     latestY3                : 56.88,  
    latestY5                : 13.97,
    latestY7                : 34.6,
    latestY9                : 7.89,
    rawGainY3Y5          : 78.0,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 9.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "apps"}),
     latestY3                : 45.88,  
    latestY5                : 12.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.800,
    factoredGainY3Y5      : 40.56,
    glgY3Y5              : 9.89,
    latestGainInGainY3Y5 : 7.808
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "alhs"}),
     latestY3                : 6.88,  
    latestY5                : 13.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.0,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 8.89,
    latestGainInGainY3Y5 : 7.889
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "baps"}),
     latestY3                : 5.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 687.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 49.56,
    glgY3Y5              : 893.89,
    latestGainInGainY3Y5 : 73.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "bghs"}),
     latestY3                : 4536.88,  
    latestY5                : 3123.97,
    latestY7                : 34.76,
    latestY9                : 367.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 34.56,
    glgY3Y5              : 89.893,
    latestGainInGainY3Y5 : 73.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "cphs"}),
     latestY3                : 456.848,  
    latestY5                : 123.97,
    latestY7                : 434.76,
    latestY9                : 67.489,
    rawGainY3Y5          : 78.840,
    factoredGainY3Y5      : 44.56,
    glgY3Y5              : 89.849,
    latestGainInGainY3Y5 : 7.48
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "cahs"}),
     latestY3                : 56.88,  
    latestY5                : 12.97,
    latestY7                : 34.76,
    latestY9                : 867.89,
    rawGainY3Y5          : 78.880,
    factoredGainY3Y5      : 8.56,
    glgY3Y5              : 889.89,
    latestGainInGainY3Y5 : 87.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "daps"}),
     latestY3                : 46.88,  
    latestY5                : 123.97,
    latestY7                : 834.76,
    latestY9                : 867.89,
    rawGainY3Y5          : 788.80,
    factoredGainY3Y5      : 4.856,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 78.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "dups"}),
     latestY3                : 6.88,  
    latestY5                : 113.97,
    latestY7                : 134.76,
    latestY9                : 617.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.156,
    glgY3Y5              : 189.89,
    latestGainInGainY3Y5 : 71.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "ewps"}),
     latestY3                : 4516.88,  
    latestY5                : 1213.97,
    latestY7                : 134.76,
    latestY9                : 167.89,
    rawGainY3Y5          : 78.810,
    factoredGainY3Y5      : 4.516,
    glgY3Y5              : 89.819,
    latestGainInGainY3Y5 : 7.81
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "evhs"}),
     latestY3                : 451.88,  
    latestY5                : 1123.97,
    latestY7                : 341.76,
    latestY9                : 617.89,
    rawGainY3Y5          : 78.810,
    factoredGainY3Y5      : 4.516,
    glgY3Y5              : 89.819,
    latestGainInGainY3Y5 : 7.18
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "ffhs"}),
     latestY3                : 6.88,  
    latestY5                : 1223.97,
    latestY7                : 334.76,
    latestY9                : 367.89,
    rawGainY3Y5          : 78.830,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.389,
    latestGainInGainY3Y5 : 73.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "frps"}),
     latestY3                : 456.88,  
    latestY5                : 1233.97,
    latestY7                : 334.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "ghps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "gwps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "hbps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "hhhs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "jrps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "keps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "laps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "lghs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "mlhs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "mips"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Reading"}),
    school               : db.schools.findOne({code : "nchs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "stvc"}),
    latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "Adps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "apps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "alhs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "baps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "bghs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "cphs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "cahs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "daps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "dups"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "ewps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "evhs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "ffhs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "frps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "ghps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "gwps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "hbps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "hhhs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "jrps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "keps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "laps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "lghs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "mlhs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "mips"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Grammar_Punctuation"}),
    school               : db.schools.findOne({code : "nchs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "stvc"}),
    latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "Adps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "apps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "alhs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "baps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "bghs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "cphs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "cahs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "daps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "dups"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "ewps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "evhs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "ffhs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "frps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "ghps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "gwps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "hbps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "hhhs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "jrps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "keps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "laps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "lghs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "mlhs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "mips"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Numeracy"}),
    school               : db.schools.findOne({code : "nchs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "stvc"}),
    latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "Adps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "apps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "alhs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "baps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "bghs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "cphs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "cahs"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "daps"}),
     latestY3                : 456.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "dups"}),
     latestY3                : 4564.88,  
    latestY5                : 123.97,
    latestY7                : 34.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "ewps"}),
     latestY3                : 4.88,  
    latestY5                : 13.97,
    latestY7                : 4.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 7.80,
    factoredGainY3Y5      : 4.568,
    glgY3Y5              : 890.89,
    latestGainInGainY3Y5 : 7.08
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "evhs"}),
     latestY3                : 8456.88,  
    latestY5                : 123.97,
    latestY7                : 384.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 789.80,
    factoredGainY3Y5      : 34.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "ffhs"}),
     latestY3                : 456.88,  
    latestY5                : 13.97,
    latestY7                : 34.76,
    latestY9                : 677.89,
    rawGainY3Y5          : 781.80,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 829.89,
    latestGainInGainY3Y5 : 37.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "frps"}),
     latestY3                : 556.88,  
    latestY5                : 123.97,
    latestY7                : 534.76,
    latestY9                : 467.89,
    rawGainY3Y5          : 78.840,
    factoredGainY3Y5      : 4.563,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 72.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "ghps"}),
     latestY3                : 545.88,  
    latestY5                : 1523.97,
    latestY7                : 394.76,
    latestY9                : -67.89,
    rawGainY3Y5          : 78.870,
    factoredGainY3Y5      : 4.546,
    glgY3Y5              : 89.829,
    latestGainInGainY3Y5 : 7.83
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "gwps"}),
     latestY3                : 56.88,  
    latestY5                : 13.97,
    latestY7                : 354.76,
    latestY9                : 567.89,
    rawGainY3Y5          : 478.80,
    factoredGainY3Y5      : 24.56,
    glgY3Y5              : 839.89,
    latestGainInGainY3Y5 : 74.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "hbps"}),
     latestY3                : 46.88,  
    latestY5                : 1223.97,
    latestY7                : 324.76,
    latestY9                : 367.89,
    rawGainY3Y5          : 784.80,
    factoredGainY3Y5      : 64.56,
    glgY3Y5              : 829.89,
    latestGainInGainY3Y5 : 72.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "hhhs"}),
     latestY3                : 46.88,  
    latestY5                : 1293.97,
    latestY7                : 314.76,
    latestY9                : 367.89,
    rawGainY3Y5          : 78.680,
    factoredGainY3Y5      : 124.56,
    glgY3Y5              : 8.89,
    latestGainInGainY3Y5 : 76.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "jrps"}),
     latestY3                : 456.88,  
    latestY5                : 23.97,
    latestY7                : 345.76,
    latestY9                : 617.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 42.56,
    glgY3Y5              : 839.89,
    latestGainInGainY3Y5 : 37.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "keps"}),
     latestY3                : 4546.88,  
    latestY5                : 1123.97,
    latestY7                : 324.76,
    latestY9                : 467.89,
    rawGainY3Y5          : 678.80,
    factoredGainY3Y5      : 34.56,
    glgY3Y5              : 879.89,
    latestGainInGainY3Y5 : 7.89
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "laps"}),
     latestY3                : 56.88,  
    latestY5                : 12.97,
    latestY7                : 134.76,
    latestY9                : 267.89,
    rawGainY3Y5          : 781.80,
    factoredGainY3Y5      : 14.56,
    glgY3Y5              : 89.89,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "lghs"}),
     latestY3                : 4156.88,  
    latestY5                : 1213.97,
    latestY7                : 334.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.820,
    factoredGainY3Y5      : 41.56,
    glgY3Y5              : 8.89,
    latestGainInGainY3Y5 : 72.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "mlhs"}),
     latestY3                : 45.88,  
    latestY5                : 1233.97,
    latestY7                : 34.76,
    latestY9                : 167.89,
    rawGainY3Y5          : 78.870,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 8.89,
    latestGainInGainY3Y5 : 17.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "mips"}),
     latestY3                : 56.88,  
    latestY5                : 123.97,
    latestY7                : 834.76,
    latestY9                : 67.89,
    rawGainY3Y5          : 78.810,
    factoredGainY3Y5      : 4.56,
    glgY3Y5              : 89.829,
    latestGainInGainY3Y5 : 7.8
})

db.results.insert({
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
    school               : db.schools.findOne({code : "nchs"}),
     latestY3                : 45.88,  
    latestY5                : 12.97,
    latestY7                : 934.76,
    latestY9                : 607.89,
    rawGainY3Y5          : 78.80,
    factoredGainY3Y5      : 94.56,
    glgY3Y5              : 8.89,
    latestGainInGainY3Y5 : 7.8
})