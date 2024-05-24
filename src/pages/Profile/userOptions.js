import { useSearchParams } from "react-router-dom";

export default function useOption(){
    let [searchParams, setSearchParams] = useSearchParams();
    const option = searchParams.get("option")

    const setQueryTo = (to) => setSearchParams(`option=${to}`)

    return [option, setQueryTo]
}