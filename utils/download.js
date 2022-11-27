export function downloadPNG(imgURL){
    const url = window.URL.createObjectURL(new Blob([imgURL]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "qrCode.png"); //or any other extension
    document.body.appendChild(link);
    link.click();
}

export function downloadSVG(imgURL){
    const url = window.URL.createObjectURL(new Blob([imgURL]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "qrCode.svg"); //or any other extension
    document.body.appendChild(link);
    link.click();
}

export function downloadJPG(imgURL){
    const url = window.URL.createObjectURL(new Blob([imgURL]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "qrCode.jpg"); //or any other extension
    document.body.appendChild(link);
    link.click();
}

