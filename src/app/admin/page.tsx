'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { useCollection } from '@/firebase/firestore/use-collection';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Container } from '@/components/layout/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

type Submission = {
  id: string;
  name: string;
  email: string;
  formType: 'empresa' | 'profissional';
  submissionDate: string;
  service?: string;
  companyName?: string;
  details?: string;
  message?: string;
};

export default function AdminPage() {
  const router = useRouter();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const submissionsQuery = useMemoFirebase(
    () => {
        if (!firestore) return null;
        return query(
            collection(firestore, 'contactFormSubmissions'),
            orderBy('submissionDate', 'desc')
        );
    },
    [firestore]
  );

  const {
    data: submissions,
    isLoading: isSubmissionsLoading,
    error,
  } = useCollection<Submission>(submissionsQuery);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/login');
  };

  if (isUserLoading || !user) {
    return (
        <div className="flex h-screen items-center justify-center bg-background">
            <div className="flex items-center space-x-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-4 w-48" />
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30">
        <header className="bg-background shadow-sm">
            <Container className="flex h-16 items-center justify-between">
                <h1 className="text-xl font-bold text-foreground">Admin</h1>
                <Button variant="outline" onClick={handleLogout}>
                Sair
                </Button>
            </Container>
        </header>

        <main className="py-8">
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle>Respostas do Formulário de Contato</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isSubmissionsLoading && (
                             <div className="space-y-2">
                                <Skeleton className="h-10 w-full" />
                                <Skeleton className="h-10 w-full" />
                                <Skeleton className="h-10 w-full" />
                             </div>
                        )}
                        {error && <p className="text-destructive">Erro ao carregar dados: {error.message}</p>}
                        {!isSubmissionsLoading && submissions && (
                            <div className="overflow-x-auto">
                                <Table>
                                <TableHeader>
                                    <TableRow>
                                    <TableHead>Data</TableHead>
                                    <TableHead>Nome</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Tipo</TableHead>
                                    <TableHead>Serviço</TableHead>
                                    <TableHead>Empresa</TableHead>
                                    <TableHead>Mensagem</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {submissions.map((submission) => (
                                    <TableRow key={submission.id}>
                                        <TableCell>
                                        {format(
                                            new Date(submission.submissionDate),
                                            'dd/MM/yyyy HH:mm'
                                        )}
                                        </TableCell>
                                        <TableCell>{submission.name}</TableCell>
                                        <TableCell>{submission.email}</TableCell>
                                        <TableCell>
                                        <Badge variant={submission.formType === 'empresa' ? 'default': 'secondary'}>
                                            {submission.formType}
                                        </Badge>
                                        </TableCell>
                                        <TableCell>{submission.service ?? 'N/A'}</TableCell>
                                        <TableCell>{submission.companyName ?? 'N/A'}</TableCell>
                                        <TableCell className="max-w-xs truncate">
                                        {submission.details || submission.message || 'N/A'}
                                        </TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                                </Table>
                            </div>
                        )}
                         {!isSubmissionsLoading && submissions?.length === 0 && (
                            <p className="text-center text-muted-foreground py-8">Nenhuma resposta encontrada.</p>
                        )}
                    </CardContent>
                </Card>
            </Container>
        </main>
    </div>
  );
}
