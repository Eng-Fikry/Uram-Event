const baseUrl="https://script.google.com/macros/s/AKfycbwcBO3HVM6flCEc1URy12byNq3UCiU2_L4hrww0TlRAy4Miwb-qk3bIGjcEO8tI37q1_g/exec"
let users=[];
(async function getData()
{
  const response = await fetch(baseUrl);
  const data = await response.json();
  users=data.data;
  console.log(data.data);
  showData(data.data)

})();

let datt="asdasd"
let x=datt.indexOf("d");
console.log(x);

function showData(usersdata)
{
    let data="";
    let [datePart] = ""

    for (let i = 0; i < usersdata.length; i++) 
        {
            const originalUrl = usersdata[i].imageUrl;

// استخراج الـ id من الرابط
            const fileId = originalUrl.split("id=")[1];

// تكوين رابط thumbnail
            const thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}`;
            
            [datePart] = usersdata[i].birth.split("T");

            data+=`<tr>
            <td>${usersdata[i].name}</td>
            <td>${usersdata[i].email}</td>
            <td>${usersdata[i].phone}</td>
            <td>${usersdata[i].residence}</td>
            <td>${[datePart]}</td>
            <td>${usersdata[i].gender}</td>
            <td>${usersdata[i].school}</td>
            <td>${usersdata[i].grade}</td>
            <td>${usersdata[i].training}</td>
            <td>${usersdata[i].coursetype}</td>
            <td><img style="width: 50px;height: 50px;" src="${thumbnailUrl}" alt=""></td>
            <td><button class="btn btn-info">Update</button></td>
            <td><button class="btn btn-danger">Delete</button></td>
            </tr>`
            
        }
        document.querySelector("tbody").innerHTML=data;
}

