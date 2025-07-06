let consecutiveWins = 0;
const loadingSound = new Audio('https://atpholdings.vn/wp-content/uploads/2023/12/lac.mp3');
const loseSound = new Audio('https://atpholdings.vn/wp-content/uploads/2023/12/lose.mp3');
const winSound = new Audio('https://atpholdings.vn/wp-content/uploads/2023/12/win.mp3');
const win = new Audio('https://random.com.vn/wp-content/uploads/2023/12/win.mp3');
const videoElement = document.getElementById('background-video');
const videoContainer = document.getElementById('video-container');


const images = [
    'https://random.com.vn/wp-content/uploads/2023/12/cua.png',
    'https://random.com.vn/wp-content/uploads/2023/12/ga.png',
    'https://random.com.vn/wp-content/uploads/2023/12/bau.png',
    'https://random.com.vn/wp-content/uploads/2023/12/ca.png',
    'https://random.com.vn/wp-content/uploads/2023/12/tom.png',
    'https://random.com.vn/wp-content/uploads/2023/12/nai.png'
];

let selectedImages = [];

function selectImage(imgElement) {

    if (imgElement.classList.contains('selectedbaucua')) {
        imgElement.classList.remove('selectedbaucua');
        const index = selectedImages.indexOf(imgElement.src);
        if (index !== -1) {
            selectedImages.splice(index, 1);
        }
    } else {
        if (selectedImages.length < 3) {
            imgElement.classList.add('selectedbaucua');
            selectedImages.push(imgElement.src);
        } else {
            alert("Bạn chỉ có thể chọn tối đa 3 ô.");
        }
    }
}

function startGame(clickedArea) { // Đổi tên tham số thành clickedArea
    const area = clickedArea;
    const resultContainer = document.getElementById('result-container');
    const loadingSpinner = document.getElementById('loading-spinner');
    const resultMessage = document.getElementById('result-message');
    const clickSound = document.getElementById('click-sound');


    videoContainer.style.display = 'none';

    loadingSound.play();

    clickSound.play();

    // Ẩn nút và hiển thị spinner
   // document.querySelector('button').style.display = 'none';
    loadingSpinner.style.display = 'block';

    // Xoá nội dung trước đó
    resultContainer.innerHTML = '';
    resultMessage.textContent = "";



    // Lấy ngẫu nhiên 3 ảnh từ mảng images sau 2 giây
    setTimeout(() => {
 const filteredImages = filterImagesByArea(area); // Gọi hàm lọc hình ảnh
        const randomImages = getRandomItems(filteredImages);
        // Hiển thị ảnh
        randomImages.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.classList.add('itembaucua');
            resultContainer.appendChild(imgElement);
        });

        // Kiểm tra số ảnh trùng với số ảnh đã chọn
        const matchedImages = randomImages.filter(img => selectedImages.includes(img));

        // Hiển thị kết quả
        if (matchedImages.length > 0) {
            resultMessage.classList.add('green-background');
            resultMessage.textContent = "You Win!";
            win.play();
            consecutiveWins++;

        } else {
            resultMessage.textContent = "You Lose!";
            resultMessage.classList.add('black-background');

            loseSound.play();
            consecutiveWins = 0;
        }

        if (consecutiveWins === 5) {
            // Gọi hàm khi có 5 chiến thắng liên tiếp
            videoContainer.style.display = 'block';
            videoElement.play();
            winSound.play();
            // Reset số lượng chiến thắng liên tiếp
            consecutiveWins = 0;
        }

        // Hiển thị lại
        // Hiển thị lại nút và ẩn spinner
       // document.querySelector('button').style.display = 'block';
        loadingSpinner.style.display = 'none';

        // Reset danh sách ảnh đã chọn
        //selectedImages = [];
    }, 2500);
}


// start game dành cho dan

function startGameDan() {
    const resultContainer = document.getElementById('result-container');
    const loadingSpinner = document.getElementById('loading-spinner');
    const resultMessage = document.getElementById('result-message');
    const clickSound = document.getElementById('click-sound');


    videoContainer.style.display = 'none';

    loadingSound.play();

    // Chơi âm thanh khi bấm nút
    clickSound.play();

    // Ẩn nút và hiển thị spinner
    document.querySelector('button').style.display = 'none';
    loadingSpinner.style.display = 'block';

    // Xoá nội dung trước đó
    resultContainer.innerHTML = '';
    resultMessage.textContent = "";



    // Lấy ngẫu nhiên 3 ảnh từ mảng images sau 2 giây
    setTimeout(() => {
        const randomImages = getRandomItemsDan(images);

        // Hiển thị ảnh
        randomImages.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.classList.add('itembaucua');
            resultContainer.appendChild(imgElement);
        });

        // Kiểm tra số ảnh trùng với số ảnh đã chọn
        const matchedImages = randomImages.filter(img => selectedImages.includes(img));

        // Hiển thị kết quả
        if (matchedImages.length > 0) {
            resultMessage.classList.add('green-background');
            resultMessage.textContent = "You Win!";
            win.play();
            consecutiveWins++;

        } else {
            resultMessage.textContent = "You Lose!";
            resultMessage.classList.add('black-background');

            loseSound.play();
            consecutiveWins = 0;
        }

        if (consecutiveWins === 5) {
            // Gọi hàm khi có 5 chiến thắng liên tiếp
            videoContainer.style.display = 'block';
            videoElement.play();
            winSound.play();
            // Reset số lượng chiến thắng liên tiếp
            consecutiveWins = 0;
        }

        // Hiển thị lại
        // Hiển thị lại nút và ẩn spinner
        document.querySelector('button').style.display = 'block';
        loadingSpinner.style.display = 'none';

        // Reset danh sách ảnh đã chọn
        //selectedImages = [];
    }, 2500);
}


let previousRandomItems = null;

function getRandomItemsDan(array) {
    const randomItems = [];

    // Nếu lần đầu tiên gọi hoặc previousRandomItems không có giá trị
    if (!previousRandomItems) {
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * array.length);
            const randomItem = array[randomIndex];
            randomItems.push(randomItem);
        }
    } else {
    // chỉnh thành 2
      for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * array.length);
            const randomItem = array[randomIndex];
            randomItems.push(randomItem);
        }
        
        
        
        //Sử dụng giá trị từ lần gọi trước đó
      
      if(array.indexOf(previousRandomItems[0]) < 5) {
        randomItems.push(array[array.indexOf(previousRandomItems[0]) + 1]);
        }
        else {
                randomItems.push(array[0]);

        }
        
    }

    // Lưu giữ giá trị cho lần gọi tiếp theo
    previousRandomItems = randomItems.slice();

    return randomItems;
}


////




videoContainer.style.display = 'none';


function getRandomItems(array) {
    const randomItems = [];
    while (randomItems.length < 3) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomItem = array[randomIndex];
            randomItems.push(randomItem);
        
    }
    return randomItems;
}

function filterImagesByArea(area) {
    let filteredImages = images.slice();
    if (area === 'left') {
        filteredImages = filteredImages.filter(img => !img.includes('nai') && !img.includes('bau'));
    } else if (area === 'right') {
        filteredImages = filteredImages.filter(img => !img.includes('ca') && !img.includes('ga'));
    } else if (area === 'bottom') {
        filteredImages = filteredImages.filter(img => !img.includes('cua') && !img.includes('tom'));
    }
    return filteredImages;
}
    </script>
    
    
    <script>
    const chuyenCheDoButton = document.getElementById('chedo'); // Lấy nút "Chuyển chế độ"
const playButton = document.getElementById('playButton'); // Lấy phần tử playButton
const playButton1 = document.getElementById('playButton1'); // Lấy phần tử playButton1
const playButtonDan = document.getElementById('playButtonDan'); // Lấy phần tử playButtonDan
  const maubiendoi = document.getElementById('maubiendoi');

// Hàm đặt lại chế độ hiển thị và đổi màu nền dựa trên chế độ đã lưu
function applySavedMode() {
  const savedMode = localStorage.getItem('currentMode');

  //if (savedMode === 'dan') {
   // playButton.style.display = 'none';
   // playButton1.style.display = 'none';
   // playButtonDan.style.display = 'flex';
   // maubiendoi.style.color = 'red'; // Đổi màu đỏ
//  }
  
  
 // else if (savedMode === 'play1') {
    playButton.style.display = 'none';
    playButton1.style.display = 'flex';
    playButtonDan.style.display = 'none';
    maubiendoi.style.color = 'purple'; // Đổi màu tím
 // } else {
   // playButton.style.display = 'flex';
   // playButton1.style.display = 'none';
   // playButtonDan.style.display = 'none';
   // maubiendoi.style.color = 'blue'; // Đổi màu xanh
//  }
  
  
}

//luu che do

// Áp dụng chế độ đã lưu khi tải trang
applySavedMode();

chuyenCheDoButton.addEventListener('click', () => {
  if (playButtonDan.style.display === 'none') {
    playButton.style.display = 'none';
    playButton1.style.display = 'none';
    playButtonDan.style.display = 'flex';
        maubiendoi.style.color = 'red'; // Đổi màu đỏ

    localStorage.setItem('currentMode', 'dan'); // Lưu chế độ vào localStorage
  } else {
    playButton.style.display = 'none';
    playButton1.style.display = 'flex';
    playButtonDan.style.display = 'none';
        maubiendoi.style.color = 'purple'; // Đổi màu tím

    localStorage.setItem('currentMode', 'play1'); // Lưu chế độ vào localStorage
  }
});

// Thêm sự kiện double click để hiển thị playButton
chuyenCheDoButton.addEventListener('dblclick', () => {
  playButton.style.display = 'flex';
  playButton1.style.display = 'none';
  playButtonDan.style.display = 'none';
      maubiendoi.style.color = 'blue'; // Đổi màu xanh

  localStorage.setItem('currentMode', 'default'); // Lưu chế độ vào localStorage
});