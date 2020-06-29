const isHasMajorVowelHarmony = (word) => {
   if (typeof word != "string") return false;

   const softVowels = ["e", "i", "ö", "ü"];
   const hardVowels = ["a", "ı", "o", "u"];

   const keyword = word.toLocaleLowerCase("tr-tr");

   let hardVowelCounter = 0;
   let softVowelCounter = 0;

   [...keyword].map((letter) => {
      //If soft or hard letters are included in the word, they are assigned to relevant counter.
      if (softVowels.indexOf(letter) != -1) softVowelCounter++;
      else if (hardVowels.indexOf(letter) != -1) hardVowelCounter++;
   });
   //if one of the counters are 0 at the same time, it is appropriate for the rule.
   return softVowelCounter == 0 || hardVowelCounter == 0 ? true : false;
};

export default isHasMajorVowelHarmony;
