module.exports = function () {
  var data = {
    pets: [
      {
        id:1,
        namePet: "Toby",
        birthDatePet: "2022-09-10",
        genderPet:"Macho",
      },
      {
        id:2,
        namePet: "Princesa",
        birthDatePet: "2019-07-03",
        genderPet:"Hembra",
      },
      {
        id:3,
        namePet: "Blanca",
        birthDatePet: "2017-09-08",
        genderPet:"Hembra",
      },
      {
        id:4,
        namePet: "Negra",
        birthDatePet: "2023-11-05",
        genderPet:"Hembra",
      }
    ],
    vaccines:[
      {
        id: 1,
        descriptionVaccine: "vacuna01",
	   observationVaccine: "Fiebre",
        dateVaccine: "2022-09-09",
        pet:
        {
          id:1,
          namePet: "Toby",
          birthDatePet: "2020-10-03",
          genderPet:"Macho",
        }
      },
    ]
  }
  return data
}
