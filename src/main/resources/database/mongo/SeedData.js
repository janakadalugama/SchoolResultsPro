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
    subject                 : db.subjects.findOne({code : "Reading"}),
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
    subject                 : db.subjects.findOne({code : "Reading"}),
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
    subject                 : db.subjects.findOne({code : "Reading"}),
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
    subject                 : db.subjects.findOne({code : "Reading"}),
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
    subject                 : db.subjects.findOne({code : "Reading"}),
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
    subject                 : db.subjects.findOne({code : "Reading"}),
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
    subject                 : db.subjects.findOne({code : "Reading"}),
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
    subject                 : db.subjects.findOne({code : "Reading"}),
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
    subject                 : db.subjects.findOne({code : "Reading"}),
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
    subject                 : db.subjects.findOne({code : "Reading"}),
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
    subject                 : db.subjects.findOne({code : "Reading"}),
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
    subject                 : db.subjects.findOne({code : "Reading"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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
    subject                 : db.subjects.findOne({code : "Persuasive_Writing"}),
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