const template = `
    <style>
        dialog {
            overflow: hidden;
        }

        .spinner {
            border-top: solid 5px red;
            border-bottom: solid 5px green;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            animation: giro 2s linear 0s infinite;
        }

        @keyframes giro {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }
    </style>

    <dialog id="tDlgSpinner">
        <div class="spinner"></div>
    </dialog id="">
`;

export function openSpinner() {
    document.body.innerHTML += template;
    document.querySelector('#tDlgSpinner').showModal();
}

export function closeSpinner() {
    document.querySelector('#tDlgSpinner').close();
    document.body.removeChild(document.querySelector('#tDlgSpinner'));
}