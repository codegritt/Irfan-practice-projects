const employees = {
  name: "gokul",
  age: "24",
  address: {
    city: "chicago",
    Country: "usa",
  },
};

const { name: fullname, age = 30 } = employees;

const names = ["gokul", "max", "john"];
const names1 = ["gokulqwe", "maxqwe", "johnqwe"];
const [x, y, z] = names;
const [a, ...b] = names1;

console.log(a);
console.log(b);

console.log(x);
console.log(y);
console.log(z);

console.log(fullname);
console.log(age);

const slaves = [
  {
    name: "Saka Manje",
    address: "14, cassava-garri-ewa street",
    gender: "Male",
  },
  {
    name: "Wawawa Warisii",
    address: "406, highway street",
    gender: "Male",
  },
];

const shoppingList = ["Oranges", "Cassava", "Garri", "Ewa", "Dodo", "Books"];

const ArrayDestructuring = () => {
  return (
    <>
      {shoppingList.map((item, index) => {
        return (
          <ol>
            <li key={index}>{item}</li>
          </ol>
        );
      })}

      {slaves.map((slave, index) => {
        return (
          <div key={index}>
            <p>{slave.name}</p>
            <p>{slave.address}</p>
            <p>{slave.gender}</p>
          </div>
        );
      })}
    </>
  );
};

export default ArrayDestructuring;
