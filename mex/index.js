use dadosDeCarros;

db.marcas.insertMany([
  {marca:"Marca1", ano: 2007, km: 165000},
  {marca:"Marca2", ano: 2010, km: 49000},
  {marca:"Marca3", ano: 2002, km: 465000},
], {w: "majority", wtimetout: 200});

db.marcas.find().pretty();
