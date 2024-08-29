import VideoModal from "../VideoModal";
import { useState } from 'react';

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
         <h1>Recupere Sua Vitalidade Masculina Naturalmente</h1>
         <p>Está cansado de soluções artificiais e seus efeitos colaterais? Descubra nosso método natural de saúde sexual masculina que transformará sua vida!</p>
         <h2>Beneficios</h2>
         <p>Aumenta a Libido Redescubra o desejo sexual com técnicas naturais comprovadas.
         </p>
         <p>Melhora o Desempenho Tenha ereções mais fortes e duradouras sem o uso de medicamentos.
         </p>
         <p>Mais Energia e Vitalidade Sinta-se revigorado e pronto para aproveitar a vida ao máximo.
         </p>
         <p>Saúde Geral Melhore sua saúde cardiovascular e reduza o estresse de forma natural.
         </p>
         <p>Fácil de Seguir Simples passos que você pode incorporar facilmente ao seu dia a dia.
 
 </p>
 <div className="App">
      
      <button className="butao-video" onClick={openModal}>Assista ao vídeo</button>
      
      {/* Componente Modal */}
      <VideoModal isOpen={isModalOpen} onClose={closeModal} videoUrl={videoUrl} />
    </div>
      </main>
    )
 };