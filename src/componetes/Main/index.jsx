import { useState } from 'react';
import casal1 from "../../assets/image/imagem1casal.jpg";
import VideoModal from "../VideoModal";

export const Main = ()=> {





  // Estado para controlar a visibilidade do modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // URL do vídeo a ser exibido
  const videoUrl = "https://youtu.be/BViTYHHlt0k?si=z2qV-Cwdt4AfKjRv"; // Exemplo de URL do YouTube

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  
   


    return(
      <main>
        <img src={casal1} alt="" />
         <h1>Recupere Sua Vitalidade Masculina Naturalmente</h1>
         <p>Está cansado de soluções artificiais e seus efeitos colaterais? Descubra nosso método natural de saúde sexual masculina que transformará sua vida!</p>
         <p>- Disfunção Erétil e Ejaculação Precoce: Problemas comuns que afetam muitos homens, com impacto físico e emocional.
<p></p>-Causas Principais:
  - Fatores psicológicos: Estresse, ansiedade, baixa autoestima.
  - Fatores físicos: Má circulação sanguínea, fraqueza dos músculos pélvicos.
</p>
<p>Resultados Esperados:
  - Melhor controle sobre a ejaculação.
  - Ereções mais fortes e duradouras.
  - Aumento da confiança e da satisfação sexual.
</p>
         <h2>Beneficios</h2>
         <p>Aumenta a Libido Redescubra o desejo sexual com técnicas naturais comprovadas.
         </p>
         <p>Melhora o Desempenho Tenha ereções mais fortes e duradouras sem o uso de medicamentos.
         </p>
         <p>Mais Energia e Vitalidade Sinta-se revigorado e pronto para aproveitar a vida ao máximo.
         </p>
         <p>Saúde Geral Melhore sua saúde cardiovascular e reduza o estresse de forma natural.
         </p>
         <p>Fácil de Seguir Simples passos que você pode incorporar facilmente ao seu dia a dia.</p>
         <p>Voce vai dura de 20 minutos a 1 hora pra poder chegar ao orgasmo.</p>
 <div className="App">
      
      <button className="butao-video" onClick={openModal}>Assista ao vídeo</button>
      
      {/* Componente Modal */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} videoUrl={videoUrl} />
    </div>
      </main>
    )
 };