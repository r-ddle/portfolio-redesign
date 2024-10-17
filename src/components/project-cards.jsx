import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/projectcard"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import { PanelsTopLeftIcon } from "lucide-react"
import { createPortal } from 'react-dom';

const ProjectCards = (cards) => {
    return (
        <motion.div
            animate={{
                scale: 1,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            className="w-80 p-5 font-cabinet relative"
        >
                <Card
                    className="text-black text-center"
                    style={{ height: "250px" }}
                >
                    <CardHeader>
                        <CardTitle>{cards.title}</CardTitle>
                        <CardDescription className="text-wrap h-10">{cards.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid justify-center space-y-2">
                        <a href={cards.github} target="_blank" rel="noopener noreferrer">
                            <Button className="text-base bg-blue-600 w-40">
                                <FaGithub className="h-5 w-5 mr-2"/>
                                Github
                            </Button>
                        </a>
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Button className="text-base bg-blue-600 w-40" variant="buttonlink">
                                    <PanelsTopLeftIcon className="h-5 w-5 mr-2"/>
                                    Click Here
                                </Button>
                            </HoverCardTrigger>
                            {createPortal(
                                <HoverCardContent className="border-none w-auto h-auto p-2 z-[3001] scale-[2] mt-20">
                                    <img className="rounded-lg max-w-[200px] max-h-[200px] object-cover" src={cards.preview} alt={cards.title} />
                                </HoverCardContent>,
                                document.body
                            )}
                        </HoverCard>
                    </CardContent>
                </Card>
        </motion.div>
    )
}

export default ProjectCards
