import {star} from "../assets/icons/index.js";

const ReviewCard = ({imgURL,customerName,ratting,feedback}) => {

    return(
        <div className={"flex justify-center items-center flex-col"}>
            <img
                src={imgURL}
                alt={"customer"}
                className={"rounded-full object-cover w-[120px] h-[120px]"}
            />
            <p
                className={"mt-6 max-w-sm text-center info-text"}
            >
                {feedback}
            </p>
            <div
                className={"mt-3 flex justify-center items-center gap-2.5"}
            >
                <img src={star} width={24} height={24} className={"object-contain m-0 "}/>
                <p className={"text-lg font-montserrat text-slate-gray"}>({ratting})</p>
            </div>
            <h3 className={"t-1 font-palanquin text-3xl text-center font-bold"}>{customerName}</h3>
        </div>
    );
}

export default ReviewCard;