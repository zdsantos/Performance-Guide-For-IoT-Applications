import { exception } from "react-ga";
//https://formatjs.io/docs/getting-started/installation/
//https://phrase.com/blog/posts/react-i18n-best-libraries/
class Resource {
    constructor(lang = 'en') {
        this.Language = lang;
    }
    setLanguage(lang) {
        if (lang === undefined || lang === "")
            throw exception();

        this.Language = lang;
    }

    getResource() {
        return resource[this.Language];
    }
}

const resource = {
    en: {
        GuideFullTitle: 'Performance Testing <span className="text-color-primary">Guide</span><br /> For IoT Applications',
        GetStarted: 'Get started'
    },
    pt: {
        GuideFullTitle: '<span className="text-color-primary">Guia</span> de Testes de Desempenho para Aplicações IoT',
        GetStarted: 'Começar'
    }
};

export default new Resource();