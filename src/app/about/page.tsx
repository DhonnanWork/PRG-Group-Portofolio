import data from '@/data/portfolioData.json';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {data.about.title}
        </h1>
        <p className="text-lg text-slate-600">
          {data.about.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.team.map((member) => (
          <Card key={member.nim} className="text-center transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <div className="mx-auto w-24 h-24 mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                <User className="w-12 h-12 text-slate-400" />
              </div>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.nim}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium bg-blue-100 text-blue-700 rounded-full px-3 py-1 inline-block">
                {member.role}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}