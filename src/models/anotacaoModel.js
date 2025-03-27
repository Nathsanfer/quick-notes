import prisma from "../../prisma/client.js";

class AnotacaoModel {
  getAll = async () => {
    return await prisma.nota.findMany();
  };

  create = async (titulo, conteudo) => {
    return await prisma.nota.create({
      data: {
        titulo, 
        conteudo,
      },
    });
  };

  update = async (id, titulo, conteudo, favorita) => {
    try {
      const anotacao = await prisma.nota.update({
        where: { id },
        data: {
          favorita: favorita !== undefined ? favorita: true,
          titulo,
          conteudo,
        }
      });
      return anotacao;

    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const anotacaoDeletada = await prisma.nota.delete ({
        where: { id },
      });
      return anotacaoDeletada

    } catch (error) {
      console.log("Error ao deletar a anotação", error);
      throw error;
    }
  };
}

export default new AnotacaoModel();
