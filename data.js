const ordersData = [
    {
        type: "दरपीठ आदेश उपर सुनुवाई",
        parties: "ज्ञानेन्द्रराज आरण/राष्ट्रपतिको कार्यालय",
        caseNumber: "०८१-AP-००३२",
        remarks:-,
        date: "२०८१।४।३०"
    },
    {
        type: "दरपीठ आदेश उपर सुनुवाई",
        parties: "माधव कुमार बस्नेत/प्रदेश सभा कार्यालय",
        caseNumber: "०८०-AP-०७०७",
         remarks:-,
        date: "२०८०।४।३०"
    },
    {
        type: "दरपीठ आदेश उपर सुनुवाई",
        parties: "डिलहरी शर्मा/न्याय परिषद सचिवालय",
         remarks:-,
        caseNumber: "०७३-RE-०२८८",
        date: "२०७६।१२।२९"
    },
    {
        type: "कारण देखाउ आदेशमा अवधि किटान",
        parties: "शेरबहादुर देउवा/राष्ट्रपतिको कार्यालय",
        caseNumber: "०७७-WC-००७१",
         remarks:-,
        date: "२०७८।२।२६"
    },
    {
        type: "कारण देखाउ आदेशमा अवधि किटान",
        parties: "विरेन्द्रराज कार्की/निर्वाचन आयोग",
        caseNumber: "०७९-WC-००४४",
         remarks:-,
        date: "२०७९।१२।१"
    },
    {
        type: "सरोकारवाला पक्षलाई प्रत्यर्थी कायम",
        parties: "नारायण भट्टराई/राष्ट्रपतिको कार्यालय",
        caseNumber: "०७८-WC-००१८",
         remarks:-,
        date: "२०८१।३।२६"
    },
    {
        type: "प्रत्यर्थीलाई बाहेक गरी लिखित जवाफ माग",
        parties: "त्रिलोक बहादुर चन्द/संघीय संसदका सभामुख",
        caseNumber: "०७८-WC-००३२",
         remarks:-,
        date: "२०७९।९।१३"
    },
    {
        type: "एकपक्षीय सुनुवाईमा अन्तरिम आदेश",
        parties: "कृष्णराज अर्याल/बुढानिलकण्ठ नगरपालिका",
        caseNumber: "०८०-WC-००५१",
         remarks:-,
        date: "२०८१।३।२६"
    },
    {
        type: "एकपक्षीय सुनुवाईमा अन्तरिम आदेश",
        parties: "दिलराज खनाल/राष्ट्रपतिको कार्यालय",
        caseNumber: "०८१-WC-०००२",
         remarks:-,
        date: "२०८१।४।३०"
    },
    {
        type: "दुईपक्षीय सुनुवाईमा अन्तरिम आदेश",
        parties: "कृष्णराज अर्याल/बुढानिलकण्ठ नगरपालिका",
        caseNumber: "०८०-WC-००५१",
         remarks:-,
        date: "२०८१।४।२३"
    },
    {
        type: "आंशिक निवेदकको हकमा मात्र अन्तरिम आदेश",
        parties: "हितकरविर सिंह कंसाकार/काठमाडौं महानगरपालिका",
        caseNumber: "०८०-WC-०००९",
         remarks:-,
        date: "२०८०।५।१३"
    },
    {
        type: "आंशिक प्रत्यर्थीको नाउँमा मात्र अन्तरिम आदेश",
        parties: "कुश्माखर सापकोटा/प्रधानमन्त्री कार्यालय",
        caseNumber: "०७८-WC-०१५५",
         remarks:-,
        date: "२०७९।९।१३"
    },
    {
        type: "अन्तरिम आदेशमा फरक राय",
        parties: "दिनेश त्रिपाठी/राष्ट्रपतिको कार्यालय",
        caseNumber: "०७७-CC-०००३",
         remarks:-,
        date: "२०७७।७।२६"
    },
    {
        type: "पछि विचार गर्ने गरी अ.आ. जारी गर्न इन्कार",
        parties: "नेपाल खुला विश्वविद्यालय/नेपाल कानून व्यवसायी परिषद",
        caseNumber: "०७९-WC-००१०",
         remarks:-,
        date: "२०७९।९।१३"
    },
    {
        type: "अन्तरिम आदेश खारेजको सुनुवाई",
        parties: "त्रिलोकबहादुर चन्द/लक्ष्मी प्रसाद गौतम",
        caseNumber: "०८०-WC-०००२",
         remarks:-,
        date: "२०८०।११।९"
    },
    {
        type: "अन्तिम सुनुवाईमा निवेदन खारेज",
        parties: "यज्ञप्रसाद अधिकारी/वाग्मती प्रदेश सरकार",
        caseNumber: "०८०-WC-००३६",
         remarks:-,
        date: "२०८१।१।१४"
    },
    {
        type: "निर्णय सुनाउने मिति तोकिएको",
        parties: "रविदत्त मिश्र/निर्वाचन आयोग",
        caseNumber: "०७९-WC-००२१",
         remarks:-,
        date: "२०८०।९।४"
    },
    {
        type: "निर्णय सुनाउने मिति तोकिएको",
        parties: "पूर्णमाया लामा/अग्नि सापकोटा",
        caseNumber: "०६९-WO-०५३३",
         remarks:-,
        date: "२०८१।४।२३"
    },
    {
        type: "एकै प्रकृतिका निवेदनमा एउटै निर्णय",
        parties: "नेपाल इन्भेष्टमेण्ट मेगा बैंक/अर्थ मन्त्रालय",
        caseNumber: "०८०-WC-००१४",
         remarks:-,
        date: "२०८०।८।२८"
    },
    {
        type: "संक्षिप्त आदेशको तयारी",
        parties: "रविराज बसौला/राष्ट्रिय स्वतन्त्र पार्टी",
        caseNumber: "०७९-WC-००३५",
         remarks:-,
        date: "२०७९।१०।१३"
    },
    {
        type: "निवेदन फिर्ता",
        parties: "काशीराज पराजुली/प्रदेश सभा, कोशी प्रदेश",
        caseNumber: "०८०-WC-०००४",
         remarks:-,
        date: "२०८०।११।९"
    },
    {
        type: "निवेदन फिर्ता",
        parties: "माछापुच्छ्रे ब्रिक फ्याक्ट्री/संघीय संसद",
        caseNumber: "०७९-WC-००६९",
         remarks:-,
        date: "२०८०।५।२७"
    },
    {
        type: "एकै सुनुवाईमा बहुआदेश",
        parties: "शेरबहादुर देउवा/राष्ट्रपतिको कार्यालय",
        caseNumber: "०७७-WC-००७१",
         remarks:-,
        date: "२०७८।२।२६"
    },
    {
        type: "स्वार्थ जोडिएका मुद्दाको सुनुवाई",
        parties: "तिर्थबहादुर खड्का/ठाकुरबाबा नगरपालिका",
        caseNumber: "०७७-WC-००२४",
         remarks:-,
        date: "२०७६।९।२१"
    },
    {
        type: "बहस समय निर्धारण",
        parties: "शेरबहादुर देउवा/राष्ट्रपतिको कार्यालय",
        caseNumber: "०७७-WC-००७१",
         remarks:-,
        date: "२०७८।२।२६"
    },
    {
        type: "विलम्बको विकल्प",
        parties: "पदम बहादुर कार्की/मेचीनगर नगर कार्यपालिका",
        caseNumber: "०८०-WO-०७७८",
         remarks:-,
        date: "२०८०।१।२०"
    },
    {
        type: "सहयोगी माग (Amicus Curiae)",
        parties: "नेहा शाही/प्रधानमन्त्री कार्यालय",
        caseNumber: "०७९-WC-००२२",
         remarks:-,
        date: "-"
    },
    {
        type: "सहयोगी माग (Amicus Curiae)",
        parties: "उपभोक्ता मञ्च नेपाल/भिमदत्त नगरपालिका",
        caseNumber: "०७५-WC-००१७",
         remarks:-,
        date: "२०८०।१२।२१"
    },
    {
        type: "क्षेत्राधिकार बाहिरको निवेदन खारेज",
        parties: "नेपाल ट्रक यातायात व्यवसायी महासंघ/प्रधानमन्त्री कार्यालय",
        caseNumber: "०७९-WC-००९५",
         remarks:-,
        date: "२०८०।४।२४"
    },
    {
        type: "ध्यानाकर्षण र निर्देशनात्मक आदेश",
        parties: "गणेशराज राई/प्रधानमन्त्री कार्यालय",
        caseNumber: "०७२-WO-०२९४",
         remarks:-,
        date: "२०७०।१२।२०"
    },
    {
        type: "बरिष्ठ न्यायाधीशलाई बाहेक गरी बेन्च गठन",
        parties: "विपन्न छात्रवृत्ति सम्बन्धी मुद्दाहरू",
        caseNumber: "०६८-WS-००४७ समेत",
         remarks:-,
        date: "२०८०।१२।१४"
    }
];
