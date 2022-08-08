import { colors } from '../config';

export interface ButtonType {
    url: string;
    download_name: string;
}

export function isButton(obj: any): obj is ButtonType {
    return obj.url !== undefined && obj.download_name !== undefined;
}

const Button = (props: { url: string; download_name: string; children: string; }) => {
    return (
        <div class="pb-3 flex gap-3 justify-center">
            <a href={props.url} target="_blank" class="w-[80%]">
                <div class={`w-full h-[50px] flex items-center justify-center rounded-lg leading-5 px-4 ${colors.bg.button} ${colors.text.button} transition-all
                    hover:shadow-[1px_1px_2px_4px_rgba(0,0,0,0.25)] active:shadow-[inset_1px_1px_0px_2px_rgba(0,0,0,0.5)] shadow-[1px_1px_0px_2px_rgba(0,0,0,0.1)]`}>
                    <h1 class="font-bold whitespace-nowrap">{props.children}</h1>
                </div>
            </a>
            <a href={props.url} download={props.download_name} aria-label={`${props.download_name} Download`} class="w-[20%]">
                <div class={`w-full h-[50px] flex items-center justify-center rounded-lg leading-5 px-4 ${colors.bg.button} transition-all
                    hover:shadow-[1px_1px_2px_4px_rgba(0,0,0,0.25)] active:shadow-[inset_1px_1px_0px_2px_rgba(0,0,0,0.5)] shadow-[1px_1px_0px_2px_rgba(0,0,0,0.1)]`}>
                    <Download />
                </div>
            </a>
        </div>
    );
};

const Download = () => {
    return (
        <svg viewBox="0 0 12 16" class={`${colors.arrow.download}`} xmlns="http://www.w3.org/2000/svg" width="13px"><path d="M0.777062 13.9058H11.2225C11.4232 13.9059 11.6161 13.9835 11.7609 14.1225C11.9056 14.2615 11.9911 14.4511 11.9993 14.6516C12.0076 14.8521 11.938 15.0481 11.8052 15.1985C11.6724 15.349 11.4865 15.4422 11.2865 15.4588L11.2225 15.4615H0.777062C0.576407 15.4613 0.383592 15.3836 0.238906 15.2445C0.0942204 15.1055 0.00885667 14.9159 0.000651262 14.7154C-0.00755415 14.515 0.0620336 14.3191 0.194875 14.1687C0.327716 14.0183 0.513533 13.9251 0.7135 13.9085L0.777062 13.9058ZM5.8251 0.918126L5.88866 0.915459C6.08387 0.915466 6.27195 0.988875 6.41555 1.12111C6.55915 1.25335 6.64778 1.43475 6.66384 1.6293L6.66651 1.69331V9.83117L8.79693 7.7012C8.94282 7.55532 9.14068 7.47336 9.34699 7.47336C9.5533 7.47336 9.75116 7.55532 9.89704 7.7012C10.0429 7.84709 10.1249 8.04495 10.1249 8.25125C10.1249 8.45756 10.0429 8.65542 9.89704 8.80131L6.43982 12.2585C6.36759 12.3308 6.28184 12.3881 6.18746 12.4272C6.09308 12.4662 5.99193 12.4864 5.88977 12.4864C5.78761 12.4864 5.68646 12.4662 5.59208 12.4272C5.4977 12.3881 5.41195 12.3308 5.33972 12.2585L1.8825 8.80131C1.73662 8.65542 1.65466 8.45756 1.65466 8.25125C1.65466 8.04495 1.73662 7.84709 1.8825 7.7012C2.02838 7.55532 2.22624 7.47336 2.43255 7.47336C2.63886 7.47336 2.83672 7.55532 2.9826 7.7012L5.11081 9.8294V1.69331C5.11082 1.49803 5.18429 1.30989 5.31662 1.16628C5.44896 1.02267 5.63047 0.934083 5.8251 0.918126Z"></path></svg>
    );
};

export default Button;
