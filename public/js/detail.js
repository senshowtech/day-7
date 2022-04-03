function getDynamicdata() {
  let id = localStorage.getItem("id");
  let getBlogs = localStorage.getItem("blogs");
  let array = JSON.parse(getBlogs);
  let project = array[id].project;
  let image = array[id].image;
  let description = array[id].description;
  let get_end_date = array[id].get_end_date;
  let get_start_date = array[id].get_start_date;
  dateFormat(get_start_date, get_end_date);
  document.getElementById("detail-project").innerHTML = `
    <h1 class="text-center">${project}</h1>
  `;
  document.getElementById("detail-description").innerHTML = `
    <p>${description}</p>
  `;
  document.getElementById("detail-image").innerHTML = `
    <img src="${image}" class="image" alt="" />
  `;
}
getDynamicdata();
function dateFormat(get_start_date, get_end_date) {
  // split array
  let start_date_split = get_start_date.split("-");
  let end_date_split = get_end_date.split("-");
  // reverse
  let start_date_reverse = start_date_split.reverse();
  let end_date_reverse = end_date_split.reverse();
  // nama bulan
  let nama_bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let start_month = start_date_reverse[1];
  let end_month = end_date_reverse[1];
  document.getElementById("detail-date").innerHTML = `
  <p>
    <i class="fa-solid fa-calendar-days"></i> ${start_date_reverse[0]} ${
    nama_bulan[parseInt(start_month.slice(1, 2))]
  } ${start_date_reverse[2]}-${end_date_reverse[0]}
    ${nama_bulan[parseInt(end_month.slice(1, 2))]} ${end_date_reverse[2]}
  </p>
  <p><i class="fa-solid fa-timer"></i>${getDate(
    get_start_date,
    get_end_date
  )}</p>  
  `;
}
dateFormat();

function getDate(get_start_date, get_end_date) {
  let startdate = new Date(get_start_date);
  let enddate = new Date(get_end_date);
  let jarak = enddate - startdate;
  let milisecond = 1000;
  let detik = 3600;
  let jam = 24;
  let hari = Math.floor(jarak / (milisecond * detik * jam));
  let minggu = Math.floor(hari / 7);
  let bulan = Math.floor(hari / 30);
  if (hari <= 6) {
    return `${hari} hari`;
  } else if (hari > 30) {
    return `${bulan} bulan`;
  } else if (hari >= 6) {
    return `${minggu} minggu`;
  }
}
