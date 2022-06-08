import { con } from './conection.js'

export async function inserirvilao(vilao)
{

    const comando= `INSERT INTO tb_vilao (id_vilao, nm_vilao,ds_maldades, bt_super_poder)
                                    VALUES (?, ?, ?, ?)`


    const [resposta] = await con.query(comando, [vilao.nome, vilao.maldades, vilao.super_poder])
    vilao.id = resposta.Insert.id;

    return vilao;
}

export async function listatodosvilão(vilao)
{

    const comando=     `SELECT  id_vilão	    id,
                                nm_vilão	    nome,
                                ds_maldades	    maldadades,
                                bt_super_poder  poder
                        FROM    tb_vilão`;

    const [linhas] = await con.query(comando)
    return linhas;

}