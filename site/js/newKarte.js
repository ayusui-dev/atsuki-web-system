window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("zipcode").addEventListener("change", () => {
    const zipcode = document.getElementById("zipcode").value.replace("-", "");
    const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`;

    fetchJsonp(url, { timeout: 10000 })
      .then(response => response.json())
      .then(data => {
        if (data.status === 200 && data.results) {
          const result = data.results[0];
          let applyAddress = result.address1;
          applyAddress = applyAddress + result.address2;
          applyAddress = applyAddress + result.address3;
          
          document.getElementById("address").value = applyAddress;
        } else {
          document.getElementById("address").value = "";
        }
      })
      .catch(error => {
        console.error("エラー:", error);
        alert("通信エラーが発生しました");
      });
  });
});


