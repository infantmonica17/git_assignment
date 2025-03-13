var uni = [
    {
        UniversityName: "Anna University",
        Year: 2000,
        colleges:[
            {
                CollegeName: "SRM College",
                Year: 2003,
                students: [
                    {
                        FirstName: "Infant",
                        LastName:"Monica",
                        Age: 23
                    },
                    {
                        FirstName: "David",
                        LastName:"Stephen",
                        Age: 24
                    }
                ]
            },
            {
                CollegeName: "St.Joseph College",
                Year: 1996,
                students: [
                    {
                        FirstName: "Asher",
                        LastName:"Saha",
                    },
                    {
                        FirstName: "Stenifa",
                        LastName: "Mio",
                        Age: 22
                    }
                ]
            }
        ]
    }
]

console.log(uni[0].colleges[0].students[0].FirstName);
console.log(uni[0].colleges[1].students[1].Age);