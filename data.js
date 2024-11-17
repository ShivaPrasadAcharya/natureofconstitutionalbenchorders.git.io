const orders = [
    {
        type: "दरपीठ आदेश उपर सुनुवाई",
        parties: "ज्ञानेन्द्रराज आरण/राष्ट्रपतिको कार्यालय",
        caseNumber: "०८१-AP-००३२",
        date: "२०८१।४।३०",
        details: "आ.व. २०८१/८२ को बजेटमा प्रयुक्त 'जनयुद्ध' शब्दावली नेपालको संविधानसँग बाझिएकोले सोलाई अमान्य र बदर गरी पाउँ भनी निवेदन दायर गर्न ल्याएकोमा रजिष्ट्रारबाट दरपीठ भएको थियो। पछि सो दरपीठ आदेश उपर संवैधानिक इजलासमा निवेदन पर्‍यो। इजलासले रजिष्ट्रारबाट भएको दरपीठ आदेश बदर गरी दर्ता गर्न आदेश दिएको छ।"
    },
    {
        type: "दरपीठ आदेश उपर सुनुवाई",
        parties: "माधव कुमार बस्नेत/प्रदेश सभा कार्यालय",
        caseNumber: "०८०-AP-०७०७",
        date: "२०८०।४।३०",
        details: "उच्च अदालतका न्यायाधीशलाई राष्ट्रपति तथा उपराष्ट्रपतिको निर्वाचनमा खटाउन सकिने गरी राष्ट्रपति तथा उपराष्ट्रपतिको निर्वाचन सम्बन्धी एन, २०७४ को दफा ७ को व्यवस्था संविधानको धारा १४३ को उपधारा (१) को प्रतिबन्धात्मक वाक्यांशसँग बाझिएकोले बदर माग गरेको निवेदन दर्ता गर्न आदेश दिएको।"
    },
    {
        type: "दरपीठ आदेश उपर सुनुवाई",
        parties: "डिलहरी शर्मा/न्याय परिषद सचिवालय",
        caseNumber: "०७३-RE-०२८८",
        date: "२०७६।१२।२९",
        details: "रजिष्ट्रारबाट मिति २०७३।१२।१७ मा दरपीठ भएको आदेश उपर परेको निवेदनमा दरपीठ आदेश मिलेको देखिँदा बदर गरी रहनु परेन भनी संवैधानिक इजलासबाट आदेश भएको।"
    },
    {
        type: "कारण देखाउ आदेशमा अवधि किटान",
        parties: "शेरबहादुर देउवा/राष्ट्रपतिको कार्यालय",
        caseNumber: "०७७-WC-००७१",
        date: "२०७८।२।२६",
        details: "संसद विघटन सम्बन्धी मुद्दामा प्रत्यर्थीको नाउँमा तत्काल म्याद सूचना जारी गर्न र दुई दिनभित्र अनिवार्य रूपमा म्याद तामेली कार्य सम्पन्न गराउन भनी आदेश भएको। यसले म्याद तामेलीमा शिथिलता र न्यायिक प्रक्रियाको अवरोधकलाई हटाई ढिलासुस्तीको दुष्प्रभावलाई न्यूनीकरण गरेको छ।"
    },
    {
        type: "कारण देखाउ आदेशमा अवधि किटान",
        parties: "विरेन्द्रराज कार्की/निर्वाचन आयोग",
        caseNumber: "०७९-WC-००४४",
        date: "२०७९।१२।१",
        details: "लिखित जवाफ पर्ने अवधि व्यतित भएको दुई हप्ताभित्र पेश गर्न आदेश भएको। यसले मुद्दाको कारबाहीलाई निश्चित समयसीमा भित्र सम्पन्न गर्ने प्रयास गरेको छ।"
    },
    {
        type: "सरोकारवाला पक्षलाई प्रत्यर्थी कायम",
        parties: "नारायण भट्टराई/राष्ट्रपतिको कार्यालय",
        caseNumber: "०७८-WC-००१८",
        date: "२०८१।३।२६",
        details: "बुढानिलकण्ठ नगरपालिकाले बुढानिलकण्ठ नारायण व्यवस्थापन समितिलाई चन्दा बाकस (दान पटिका) हटाउने विषयमा गरेका पत्राचार बदर माग गरी परेको निवेदनमा गुठी संस्थान केन्द्रीय कार्यालयको प्रत्यक्ष सरोकार रहेको भनी प्रत्यर्थी कायम गरी लिखित जवाफ माग गरिएको। साथै अन्तरिम आदेशको छलफलमा समेत झिकाइएको।"
    },
    {
        type: "प्रत्यर्थीलाई बाहेक गरी लिखित जवाफ माग",
        parties: "त्रिलोक बहादुर चन्द/संघीय संसदका सभामुख",
        caseNumber: "०७८-WC-००३२",
        date: "२०७९।९।१३",
        details: "अन्य प्रत्यर्थीहरूको लिखित जवाफबाट प्रयोजन पुरा हुने देखिएकोले संघीय संसदका ९८ जना सांसदलाई बाहेक गरी लिखित जवाफ माग गरिएको। यसले अनावश्यक विलम्ब र जटिलता रोक्न मद्दत गरेको छ।"
    },
    {
        type: "एकपक्षीय सुनुवाईमा अन्तरिम आदेश",
        parties: "कृष्णराज अर्याल/बुढानिलकण्ठ नगरपालिका",
        caseNumber: "०८०-WC-००५१",
        date: "२०८१।३।२६",
        details: "बुढानिलकण्ठ क्षेत्र विकास समितिले बुढानिलकण्ठ नारायण व्यवस्थापन समितिलाई लेखेको पत्र हाललाई कार्यान्वयन नगर्नु नगराउनु भनी अल्पकालीन अन्तरिम आदेश जारी भएको। विषयको गम्भीरता र तत्काल रोक्नुपर्ने अवस्था देखिएकोले एकपक्षीय सुनुवाईबाट आदेश जारी गरिएको।"
    },
    {
        type: "दुईपक्षीय सुनुवाईमा अन्तरिम आदेश",
        parties: "कृष्णराज अर्याल/बुढानिलकण्ठ नगरपालिका",
        caseNumber: "०८०-WC-००५१",
        date: "२०८१।४।२३",
        details: "पूर्व अल्पकालीन अन्तरिम आदेशलाई निरन्तरताको अतिरिक्त गुठी संस्थान ऐन, २०३३ अनुसार बुढानिलकण्ठ नारायण मन्दिरको सञ्चालन र व्यवस्थापनमा हस्तक्षेप नगर्नु भनी थप आदेश जारी भएको। दुवै पक्षको धारणा सुनी विस्तृत आदेश जारी गरिएको।"
    },
    {
        type: "आंशिक निवेदकको हकमा मात्र अन्तरिम आदेश",
        parties: "हितकरविर सिंह कंसाकार/काठमाडौं महानगरपालिका",
        caseNumber: "०८०-WC-०००९",
        date: "२०८०।५।१३",
        details: "काठमाडौं महानगरपालिका शिक्षा ऐन संशोधन विरुद्धको निवेदनमा संशोधन हुनुपूर्व निर्वाचित भई कार्यकाल बाँकी रहेका अध्यक्षहरूको हकमा मात्र अन्तरिम आदेश जारी भएको। यसले विभेदपूर्ण प्रभाव रोक्न मद्दत गरेको छ।"
    },
    {
        type: "आंशिक प्रत्यर्थीको नाउँमा मात्र अन्तरिम आदेश",
        parties: "कुश्माखर सापकोटा/प्रधानमन्त्री कार्यालय",
        caseNumber: "०७८-WC-०१५५",
        date: "२०७९।९।१३",
        details: "भूउपयोग नियमावली, २०७९ को निश्चित क्षेत्रफल अनुसारका जग्गाहरूको कित्ताकाट सम्बन्धी सूचना कार्यान्वयन नगर्नु भनी भक्तपुर जिल्ला अदालतको नाममा मात्र अन्तरिम आदेश जारी भएको। प्रभावकारी कार्यान्वयनको लागि सम्बन्धित निकायलाई मात्र आदेश जारी गरिएको।"
    },
    {
        type: "अन्तरिम आदेशमा फरक राय",
        parties: "दिनेश त्रिपाठी/राष्ट्रपतिको कार्यालय",
        caseNumber: "०७७-CC-०००३",
        date: "२०७७।७।२६",
        details: "बामदेव गौतमको राष्ट्रिय सभा सदस्य मनोनयन विवादमा बहुमत न्यायाधीशले अन्तरिम आदेश जारी गर्न अस्वीकार गरेको तर एक जना न्यायाधीशले अन्तरिम आदेश जारी गर्नुपर्ने राय व्यक्त गरेको। यसले न्यायिक स्वतन्त्रता र विविध दृष्टिकोणको महत्त्व दर्शाउँछ।"
    },
    {
        type: "पछि विचार गर्ने गरी अ.आ. जारी गर्न इन्कार",
        parties: "नेपाल खुला विश्वविद्यालय/नेपाल कानून व्यवसायी परिषद",
        caseNumber: "०७९-WC-००१०",
        date: "२०७९।९।१३",
        details: "परीक्षा सम्पन्न भइसकेको र थप परीक्षा कार्यक्रम तय नभएकोले तत्काल अपूरणीय क्षति नहुने देखी अन्तरिम आदेश जारी नगरिएको। भविष्यमा आवश्यक परे पुनः विचार गर्न सकिने गरी राखिएको।"
    },
    {
        type: "अन्तरिम आदेश खारेजको सुनुवाई",
        parties: "त्रिलोकबहादुर चन्द/लक्ष्मी प्रसाद गौतम",
        caseNumber: "०८०-WC-०००२",
        date: "२०८०।११।९",
        details: "सांसद विकास कोषको बजेट विनियोजन उपर जारी भएको अन्तरिम आदेश खारेजीको लागि संघीय संसद सचिवालयले दिएको निवेदनमा सबै प्रत्यर्थीको लिखित जवाफ परिसकेकोले पूर्ण सुनुवाईमा लैजाने आदेश भएको।"
    },
   
    {
        type: "अन्तिम सुनुवाईमा निवेदन खारेज",
        parties: "यज्ञप्रसाद अधिकारी/वाग्मती प्रदेश सरकार",
        caseNumber: "०८०-WC-००३६",
        date: "२०८१।१।१४",
        details: "वाग्मती प्रदेशको ३० वर्षे नाघेका विद्युतीय सवारी साधन र २० वर्ष नाघेका अन्य सवारी साधनलाई अनिवार्य रूपमा पत्रु गर्नुपर्ने व्यवस्था संविधान विपरीत नरहेको र प्रदेशको एकल अधिकारभित्र रहेको भनी कारण देखाउ आदेश विना नै खारेज गरिएको।"
    },
    {
        type: "निर्णय सुनाउने मिति तोकिएको",
        parties: "रविदत्त मिश्र/निर्वाचन आयोग",
        caseNumber: "०७९-WC-००२१",
        date: "२०८०।९।४",
        details: "दोहोर्‍याई मतगणना गराई पाउँ भन्ने निवेदनमा मिति २०८०।६।२४ मा सुनुवाई अन्तिम भई मिति २०८०।०९।०४ लाई निर्णय सुनाउने मिति तोकिएको। न्यायिक प्रक्रियामा पारदर्शिता र निश्चितता कायम गर्न यस्तो व्यवस्था गरिएको।"
    },
    {
        type: "निर्णय सुनाउने मिति तोकिएको",
        parties: "पूर्णमाया लामा/अग्नि सापकोटा",
        caseNumber: "०६९-WO-०५३३",
        date: "२०८१।४।२३",
        details: "मिति २०८१।०२।२३ मा सुनुवाई सम्पन्न भई निर्णय सुनाउन तोकिएको मिति २०८१।०४।२३ मा निर्णय सुनाउन नसकी मिति २०८१।५।१२ र त्यसपछि मिति २०८१।६।९ लाई सारिएको। विषयवस्तुको जटिलताले गर्दा निर्णय तयारीमा थप समय लागेको।"
    },
    {
        type: "एकै प्रकृतिका निवेदनमा एउटै निर्णय",
        parties: "नेपाल इन्भेष्टमेण्ट मेगा बैंक/अर्थ मन्त्रालय",
        caseNumber: "०८०-WC-००१४",
        date: "२०८०।८।२८",
        details: "FPO र BPG सम्बन्धी कर विवादमा विभिन्न बैंक तथा वित्तीय संस्थाहरूले दायर गरेका निवेदनहरूमा एकैपटक सुनुवाई गरी एउटै फैसला गरिएको। यसले न्यायिक एकरूपता र प्रभावकारिता कायम गर्न मद्दत गरेको।"
    },
    {
        type: "संक्षिप्त आदेशको तयारी",
        parties: "रविराज बसौला/राष्ट्रिय स्वतन्त्र पार्टी",
        caseNumber: "०७९-WC-००३५",
        date: "२०७९।१०।१३",
        details: "मिति २०७९।०९।२२ मा अन्तिम सुनुवाई भई फैसलाको संक्षिप्त पाठ सोही दिन तयार गरिएको र पूर्ण पाठ पछि तयार गरिएको। शीघ्र न्याय र निर्णयको जानकारीका लागि यस्तो व्यवस्था गरिएको।"
    },
    {
        type: "निवेदन फिर्ता",
        parties: "काशीराज पराजुली/प्रदेश सभा, कोशी प्रदेश",
        caseNumber: "०८०-WC-०००४",
        date: "२०८०।११।९",
        details: "कोशी प्रदेशको निजामती सेवा ऐनमा चुनौति दिइएको दफा नै संशोधन भई हटिसकेकोले निवेदन फिर्ता भएको। विवादको विषय नै समाप्त भएपछि निवेदन फिर्ता गरिएको।"
    },
    {
        type: "निवेदन फिर्ता",
        parties: "माछापुच्छ्रे ब्रिक फ्याक्ट्री/संघीय संसद",
        caseNumber: "०७९-WC-००६९",
        date: "२०८०।५।२७",
        details: "वैयक्तिक प्रकृतिको रिट निवेदन माग रहेको हुँदा निवेदन फिर्ता गरिएको। संवैधानिक इजलासको क्षेत्राधिकारभित्र नपर्ने भएकोले फिर्ता गरिएको।"
    },
    {
        type: "एकै सुनुवाईमा बहुआदेश",
        parties: "शेरबहादुर देउवा/राष्ट्रपतिको कार्यालय",
        caseNumber: "०७७-WC-००७१",
        date: "२०७८।२।२६",
        details: "संसद विघटन सम्बन्धी मुद्दामा अन्तरिम आदेश, बहस व्यवस्थापन, लिखित बहसनोट, सक्कल फाइल झिकाउने लगायत १२ वटा विभिन्न आदेशहरू एकैपटक जारी गरिएको। मुद्दाको समग्र व्यवस्थापन र शीघ्र निरूपणका लागि यस्तो गरिएको।"
    },
    {
        type: "स्वार्थ जोडिएका मुद्दाको सुनुवाई",
        parties: "तिर्थबहादुर खड्का/ठाकुरबाबा नगरपालिका",
        caseNumber: "०७७-WC-००२४",
        date: "२०७६।९।२१",
        details: "संवैधानिक इजलासमा प्रधान न्यायाधीशको अनिवार्य उपस्थिति हुनुपर्ने संवैधानिक व्यवस्थाका कारण स्वार्थ बाझिएको अवस्थामा पनि सुनुवाई गर्नुपरेको। संवैधानिक बाध्यताले गर्दा यस्तो अवस्था सिर्जना भएको।"
    },
    {
        type: "बहस समय निर्धारण",
        parties: "शेरबहादुर देउवा/राष्ट्रपतिको कार्यालय",
        caseNumber: "०७७-WC-००७१",
        date: "२०७८।२।२६",
        details: "निवेदक पक्षका लागि १५ घण्टा र विपक्षीका लागि १५ घण्टा गरी कुल ३० घण्टा बहस समय निर्धारण गरिएको। बहस व्यवस्थापन र समयको सदुपयोगका लागि यस्तो व्यवस्था गरिएको।"
    },
    {
        type: "विलम्बको विकल्प",
        parties: "पदम बहादुर कार्की/मेचीनगर नगर कार्यपालिका",
        caseNumber: "०८०-WO-०७७८",
        date: "२०८०।१।२०",
        details: "संवैधानिक इजलासमा विचाराधीन विषयमै नियमित इजलासबाट अन्तरिम आदेश प्राप्त गरेको। संवैधानिक इजलासमा विलम्ब भएकोले वैकल्पिक उपचारको रूपमा यस्तो व्यवस्था गरिएको।"
    },
    {
        type: "सहयोगी माग (Amicus Curiae)",
        parties: "नेहा शाही/प्रधानमन्त्री कार्यालय",
        caseNumber: "०७९-WC-००२२",
        date: "-",
        details: "जटिल संवैधानिक प्रश्न समावेश भएको विषयमा नेपाल बार एसोसियसन र सर्वोच्च अदालत बार एसोसियसनबाट एक-एक जना Amicus Curiae माग गरिएको। विशेषज्ञ राय प्राप्त गरी न्यायिक निरूपण गर्न यस्तो व्यवस्था गरिएको।"
    },
    {
        type: "सहयोगी माग (Amicus Curiae)",
        parties: "उपभोक्ता मञ्च नेपाल/भिमदत्त नगरपालिका",
        caseNumber: "०७५-WC-००१७",
        date: "२०८०।१२।२१",
        details: "स्थानीय सरकारसँग सम्बन्धित माछा कर विवादमा दुई जना सहन्यायाधिवक्ताको उपस्थिति माग गरिएको। विषयवस्तुको जटिलता र कानूनी पक्षको स्पष्टताका लागि विशेषज्ञ राय माग गरिएको।"
    },
    {
        type: " अन्य इजलासको क्षेत्राधिकारभित्र पर्ने भनी  सम्बन्धी इजलासमा पेश गर्ने आदेश",
        parties: "नेपाल ट्रक यातायात व्यवसायी महासंघ/प्रधानमन्त्री कार्यालय",
        caseNumber: "०७९-WC-००९५",
        date: "२०८०।४।२४",
        details: "संवैधानिक इजलासको अधिकारक्षेत्रभित्र नपर्ने देखिएकोले इजलासको दायरीको लगत कट्टा गरी सर्वोच्च अदालतको अन्य सम्बन्धित इजलासमा पठाइएको। क्षेत्राधिकारको सीमा कायम गर्न यस्तो आदेश भएको।"
    },
    {
        type: " संवैधानिक इजलासको क्षेत्राधिकारभित्र पर्ने भनी  सम्बन्धी इजलासबाट संवैधानिक इजलासमा पेश गर्ने आदेश",
        parties: "प्रशन्न शर्मा/ निर्वाचन आयोग कान्तिपथसमेत",
        caseNumber: "०७९-WO-०५९०/ ०७९-WC-००५१",
        date: "२०७९।०९।५",
        details: " अनिल कुमार सिन्हा र सपना प्रधान मल्लको संयुक्त ईजलासबाट निम्न आदेश भएको थियोः <br> प्रत्यर्थी विनु रायमाझी नाम बागमती प्रदेश सभाको समानुपातिक तर्फको बन्द सुचीमा समावेश भएकोमा निज प्रदेश सभा निर्वाचन ऐन, २०७४ को दफा १३ को खण्ड (ज) बमोजिम अयोग्य भएको भन्ने कारण देखाई निवेदकले रिट निवेदन दायर गरेको पाइयो। निज विनु रायमाझी पौडेललाई निर्वाचन आयोगले मिति २०७९।८।२८ मा प्रदेश सभा सदस्य पदमा निर्वाचित हुनुभएको भनी प्रमाणपत्र प्रदान गरेको देखिन्छ। प्रदेश सभा सदस्यको अयोग्यता सम्बन्धी विषय नेपालको संविधानको धारा १३७ को उपधारा (२) को देहाय (ख) बमोजिम संवैधानिक इजलासको क्षेत्राधिकार भित्र पर्ने देखिएको हुँदा अब प्रस्तुत निवेदन संवैधानिक इजलास समक्ष पेश गर्न आवश्यक व्यवस्था मिलाउनु होला।"
    },
    {
        type: "ध्यानाकर्षण र निर्देशनात्मक आदेश",
        parties: "गणेशराज राई/प्रधानमन्त्री कार्यालय",
        caseNumber: "०७२-WO-०२९४",
        date: "२०७०।१२।२०",
        details: "प्रहरीको योग्यता छनौट प्रक्रिया र अवकास सेवा गणना जस्ता सारभूत विषय ऐनमै व्यवस्था गर्न निर्देशनात्मक आदेश जारी भएको। सरकारले हालसम्म कार्यान्वयन नगरेकोतर्फ ध्यानाकर्षण गराइएको।"
    },
    {
        type: "बरिष्ठ न्यायाधीशलाई बाहेक गरी बेन्च गठन",
        parties: "विपन्न छात्रवृत्ति सम्बन्धी मुद्दाहरू",
        caseNumber: "०६८-WS-००४७ समेत",
        date: "२०८०।१२।१४",
        details: "२०६८ सालदेखि विचाराधीन रहेका मुद्दाहरूको फछ्यौटका लागि वरिष्ठतम न्यायाधीश बाहेक अन्य न्यायाधीशहरूबाट इजलास गठन गरी निर्णय गरिएको। पुराना मुद्दाहरूको शीघ्र फछ्यौटका लागि यस्तो व्यवस्था गरिएको।"
    },
  {
        type: "म्याद बदर",
        parties: "अ. विरेन्द्रराज कार्की/दिपक मनाङ्गे भनिने राजिव गुरूङ्ग",
        caseNumber: "०६८-WS-००४७ समेत",
        date: "२०८१।०७।०७",
        details: "प्रदेश सभा सचिवालयमा तामेल भएको म्याद पनि बदर भयो। दिपक मनाङ्गेले लिखित जवाफ नफिराएपछि निजले म्याद बुझेको भरपाईको लागि अदालतले पत्राचार गर्‍यो। सोको जवाफमा सचिवालयले पिजन होलमा राखिदिएको जानकारी गरायो। <br>  २०६८ सालदेखि विचाराधीन रहेका मुद्दाहरूको फछ्यौटका लागि वरिष्ठतम न्यायाधीश बाहेक अन्य न्यायाधीशहरूबाट इजलास गठन गरी निर्णय गरिएको। पुराना मुद्दाहरूको शीघ्र फछ्यौटका लागि यस्तो व्यवस्था गरिएको।"
    }
];
