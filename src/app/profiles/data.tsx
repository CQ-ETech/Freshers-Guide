import { Factory, Landmark } from "lucide-react";
import { FaCode } from "react-icons/fa6";

export const data = [
  {
    name: 'Tech',
    heading: 'SDE, Data Science, AI, ML, etc.',
    description: "Curious how to crack SDE, AI, or Data Science roles from IIT KGP? Here's your no-nonsense prep roadmap - start with DSA (think arrays to DP in 3-4 months), master core CS (OOPs, DBMS, OS, CN), and layer on system design later. This summer? Dive into DSA, hit recursion level in 45 days, and start contests by June 20. With top tech giants like Google and Microsoft hiring on campus, this is your chance to get ahead - click to see how KGPians do it!",
    icon: <FaCode />,
    iconColor: '#32bef2',
    href: '/profiles/tech',
    id: 0
  },
  {
    name: 'Non Tech',
    heading: 'Finance, Consulting, Product Roles',
    description: "Want to explore Consulting, Product, or Finance roles at IIT KGP but not sure where to start? Whether you're aiming for top consulting firms, dreaming of building innovative products, or diving into high-impact finance roles - this guide has you covered. Get structured prep strategies, CV tips, interview guidance, and roadmap insights tailored for each profile - all campus-specific and completely free. Click to discover how you can start building your journey today.",
    icon: <Landmark color="#a66cff" />,
    iconColor: '#a66cff',
    href: '/profiles/non-tech',
    id: 1
  },
  {
    name: 'Core',
    heading: 'Core/FMCG',
    description: "Curious about Core or FMCG roles at IIT KGP? Whether you're eyeing engineering giants or fast-moving consumer goods companies like Unilever or P&G, this track values strong fundamentals and practical knowledge. Think core subjects, industrial training, relevant software (like AutoCAD, ANSYS, MATLAB), and a proactive approach to problem-solving. Use summers to brush up on concepts, pursue relevant certifications, or get hands-on experience through research or internships. With consistent effort and the right prep strategy, you can unlock some of the most respected and stable career paths offered during internships and placements at KGP.",
    icon: <Factory color="#d58936" />,
    iconColor: '#d58936',
    href: '/profiles/core',
    id: 2
  },
];