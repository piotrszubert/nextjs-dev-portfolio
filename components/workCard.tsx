import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FileDown, Briefcase } from 'lucide-react';


const workTimeline = [
  { company: 'Blitz', position: 'CEO', start: '2022', end: 'Present' },
  { company: 'Facebook', position: 'Teamleader', start: '2020', end: '2022' },
  { company: 'Snapchat', position: 'Product designer', start: '2018', end: '2020' },
  { company: 'Tesla', position: 'Software developer', start: '2016', end: '2018' },
];

export default function WorkCard() {
  return (
    <div>
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-3">
                <Briefcase/>
                Work
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className='flex flex-col gap-3'>
              {workTimeline.map((item, index) => (
                <li className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {item.company}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {item.position}
                    </span>
                  </div>
                  <div className="text-xs text-zinc-400">
                    {item.start}-{item.end}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full" variant="outline">
              <div className="flex gap-2">
                Download CV 
                <FileDown className="w-6 h-5"/>
              </div>
            </Button>
          </CardFooter>
        </Card>
    </div>
  );
}
