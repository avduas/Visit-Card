const codingLanguages = ["HTML", "CSS", "JavaScript"]


const generateFooterSentence = () => {
  const lastLanguage = codingLanguages.pop(); 
  const sentence = `${codingLanguages.join(', ')} and ${lastLanguage}`;
  return sentence;
  };

const footerLanguages = generateFooterSentence();
document.getElementById('footer-languages').textContent = footerLanguages;