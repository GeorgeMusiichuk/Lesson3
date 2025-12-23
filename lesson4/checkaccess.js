const ages = [10, 18, 55, 3, 20];

const checkAccess = (ages) => {
    for (const age of ages) {
      if (age >= 18) {
        console.log("Возраст " + age, "-- Доступ разрешен");
        continue;
       }  else console.log("Возраст " + age, "-- Доступ запрещен");
    
    }
    
}


console.log(checkAccess(ages));