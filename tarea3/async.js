const esperarSegundos = async (segundos) => {
    console.log(`Esperando ${segundos} segundos...`);
    
    await new Promise(resolve => setTimeout(resolve, segundos * 1000));
    
    console.log(`Han pasado ${segundos} segundos.`);
}

export default esperarSegundos;
