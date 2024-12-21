function showPopups() {
    const mainBox = document.getElementById("main-box");
    mainBox.style.display = "none"; // Ẩn bảng chính

    const numPopups = 20; // Số bảng hiện ra
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    for (let i = 0; i < numPopups; i++) {
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerText = "Anh nhớ em";

        // Vị trí ngẫu nhiên từ trái sang phải
        const x = Math.random() * (screenWidth - 200); // Trừ chiều rộng bảng
        const y = Math.random() * (-100); // Bắt đầu từ trên màn hình, ngoài tầm nhìn
        popup.style.left = x + "px";
        popup.style.top = y + "px";

        // Thời gian ngẫu nhiên cho hiệu ứng
        const fallTime = Math.random() * 5 + 3; // Thời gian từ 3s đến 8s
        const moveTime = Math.random() * 5 + 3; // Thời gian di chuyển từ 3s đến 8s

        popup.style.animationDuration = `${fallTime}s, ${moveTime}s`; // Đặt thời gian cho animation

        document.body.appendChild(popup);
    }
}
