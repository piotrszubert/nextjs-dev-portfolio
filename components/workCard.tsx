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
  { company: 'Reklamowe 24', position: 'Software developer', start: 'April 2021', end: 'Present' },
  { company: 'Optimus', position: 'Intern', start: 'June 2020', end: 'July 2020' },
  { company: 'Domino', position: 'Intern', start: 'January 2017', end: 'April 2017' },
  { company: 'Medana Pharma S.A', position: 'Intern', start: 'May 2016', end: 'June 2016' },
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
                <li
                  key={index} 
                  className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {item.company}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.position}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.start}-{item.end}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild size="lg" className="w-full" variant="outline">
              <a href="/assets/cv.pdf" download>
                <div className="flex gap-2">
                  Download CV 
                  <FileDown className="w-6 h-5"/>
                </div>
              </a>
            </Button>
          </CardFooter>
        </Card>
    </div>
  );
}
