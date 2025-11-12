const data=
    [
  { "id": 1, "name": "Alice Johnson", "email": "alice.johnson@example.com", "age": 29, "country": "USA", "joined": "2022-03-15" },
  { "id": 2, "name": "Bob Smith", "email": "bob.smith@example.com", "age": 34, "country": "Canada", "joined": "2021-07-09" },
  { "id": 3, "name": "Charlie Nguyen", "email": "charlie.nguyen@example.com", "age": 41, "country": "Australia", "joined": "2020-11-20" },
  { "id": 4, "name": "Diana Patel", "email": "diana.patel@example.com", "age": 27, "country": "India", "joined": "2023-02-10" },
  { "id": 5, "name": "Ethan Lee", "email": "ethan.lee@example.com", "age": 31, "country": "Singapore", "joined": "2019-06-28" },
  { "id": 6, "name": "Fiona Garcia", "email": "fiona.garcia@example.com", "age": 36, "country": "Mexico", "joined": "2021-12-01" },
  { "id": 7, "name": "George Kim", "email": "george.kim@example.com", "age": 24, "country": "South Korea", "joined": "2023-05-17" },
  { "id": 8, "name": "Hannah Brown", "email": "hannah.brown@example.com", "age": 39, "country": "UK", "joined": "2020-01-11" },
  { "id": 9, "name": "Ivan Petrov", "email": "ivan.petrov@example.com", "age": 45, "country": "Russia", "joined": "2018-08-05" },
  { "id": 10, "name": "Jasmine Li", "email": "jasmine.li@example.com", "age": 30, "country": "China", "joined": "2022-10-21" }
]




export default function TableComponent(){
    return(
        <table>
          <thead>
            <th>
                 <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f4f4f4",
                  textAlign: "left",
                }}
              >
                {key.toUpperCase()}
              </th>
            ))}
          </tr>
            </th>
             <tbody>
          {data.map((row) => (
            <tr key={row.id} style={{ borderBottom: "1px solid #eee" }}>
              {Object.values(row).map((value, i) => (
                <td
                  key={i}
                  style={{ border: "1px solid #ddd", padding: "8px" }}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
          </thead>
        </table>
    )
}




async function fetchData() {
    return new Promise((resolve) => setTimeout(() => resolve("Data Loaded"), 100));
}

async function test() {
    console.log("Start");

    fetchData().then(res => console.log(res));
    console.log(await fetchData());

    setTimeout(() => console.log("Timeout"), 0);
    Promise.resolve().then(() => console.log("Promise"));

    console.log("End");
}

test();

star

let value = 10;

function mystery(a = value, b = () => a, c = b()) {
  let value = 20;
  console.log(a, b(), c);
}

mystery();
mystery(5);

20,b(),c
100,b(),c


let arr = [10, 20, 30];
let obj = { a: 1, b: 2 };

function mystery([x, ...y], { a: A, b = A + 1 }) {
  console.log(x, y, A, b);
}

mystery(arr, { a: 5 });
mystery([...[..."123"].map(Number)], { a: 3, b: 7 });

// Write a recursive function that flattens nested arrays up to a given depth.
function deepFlatten(arr, depth = 1) {
  // your code
}
console.log(deepFlatten([1, [2, [3, [4]]]], 1));
// Ans: [1, 2, [3, [4]]]









