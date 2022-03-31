exports.getDate = (get_start_date, get_end_date) => {
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
};

exports.dateMonth = (get_start_date, get_end_date) => {
  let start_date_split = get_start_date.split("-");
  let end_date_split = get_end_date.split("-");
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
  let hari_start = start_date_split[2];
  let hari_end = end_date_split[2];
  let tahun_start = start_date_split[0];
  let tahun_end = end_date_split[0];
  let bulan_start = nama_bulan[parseInt(start_date_split[1]) - 1];
  let bulan_end = nama_bulan[parseInt(end_date_split[1]) - 1];
  let akhir = `${hari_start} ${bulan_start} ${tahun_start} - ${hari_end} ${bulan_end} ${tahun_end}`;
  return akhir;
};
