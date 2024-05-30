import Line from "@/common/components/svg/Line";
import Star from "@/common/components/svg/Star";

export default function FriendsProfile() {
    return(
        <main>
            <h3>Se Mexe Comigo</h3>
            <div>
                <h4>Nome do Usuário</h4>
            </div>

            <div>
                <span>
                    <Star/> Avaliações 
                </span>
                <span>
                    0.00/5
                    <Line/>
                    <Line/>
                    <Line/>
                    <Line/>
                    <Line/>
                </span>
            </div>

            <div>
                <div>
                    <span>Data de Nascimento</span>
                    <span>29/10/2000</span>
                </div>
                <div>
                    <span>Genero</span>
                    <span>Masculino</span>
                </div>
            </div>
        </main>
    )
}