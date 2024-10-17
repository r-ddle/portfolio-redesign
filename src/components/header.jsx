import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays } from 'lucide-react';

const Header = ({ name }) => (
  <h1 className="text-center text-[30px]">
    Hello! my name is
    <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link" href="https://github.com/Flyx-Devs" className="text-3xl font-extrabold">{name}</Button>
            </HoverCardTrigger>
        <HoverCardContent className="w-[270px] p-4">
            <div className="flex justify-between">
                    <Avatar className="w-12 h-12">
                        <AvatarImage src="https://github.com/Flyx-Devs.png" />
                    </Avatar>
                <div className="space-y-1">
                        <p className="text-sm">
                            Owner of Flyx Devs
                        </p>
                    <div className="flex items-center pt-2">
                        <CalendarDays className='mr-2 h-4 w-4 opacity-70'/>
                        <span className="text-xs text-muted-foreground">
                            Developing since 2024
                        </span>
                    </div>
                </div>
            </div>
        </HoverCardContent>
    </HoverCard>
  </h1>
);

export default Header
