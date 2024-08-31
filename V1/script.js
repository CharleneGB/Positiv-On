const citations = [
    "Il n’y a qu’une chose qui puisse rendre un rêve impossible, c’est la peur d’échouer.",

" Ceux qui abandonnent ne gagnent jamais, ceux qui gagnent n’abandonnent jamais.",


" Dans 20 ans, vous serez plus déçu par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.",


"Les personnes qui réussissent le mieux dans la vie sont celles qui posent des questions. Ils apprennent sans cesse. Ils grandissent sans cesse. Ils poussent sans cesse.",


" Avoir un mental 100 % positif, c’est le secret. La clé de toutes les victoires.",


" Ceux qui ne croient pas en l’impossible sont priés de ne pas décourager ceux qui sont en train de le faire.",


" Rien n’est impossible, seules les limites de nos esprits définissent certaines choses comme inconcevables.",


" Le plus grand plaisir de la vie est de réaliser ce que les autres vous pensent incapable de réaliser.",


" Ne perds jamais espoir, lorsque le soleil se couche, les étoiles apparaissent.",


" Votre vie peut changer quand vous changerez vos actions, et vos actions peuvent changer quand vous changerez votre manière de penser. Si vous ne pouvez pas réussir, vous pouvez essayer. Si vous pouvez essayer, vous pouvez réussir…",


" Nous avons deux choix dans la vie : le premier est d’accepter les choses comme elles sont et la deuxième est de prendre la décision de les changer.",


" N’acceptez jamais la défaite, vous êtes peut-être à un pas de la réussite.",


" Nous pouvons changer nos vies. Nous pouvons faire, avoir et être exactement ce que nous souhaitons."
];

function genererCitation() {
    const index = Math.floor(Math.random() *citations.length);
    //méthode Math.floor => envoie le plus grand entier qui est inférieur ou égal à un nombre x.
    //méthode Math.random => renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1]
    const citation = citations[index];
    document.getElementById("citation").textContent = citation;
}

genererCitation()