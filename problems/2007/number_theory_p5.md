---
id: fimo_2007_number_theory_p5
year: 2007
number: 5
difficulty: medium
topics: ["number theory"]
source: "IMO 2007 Number Theory Problem 5"
---

Find all surjective functions \(f: \mathbb{N} \rightarrow \mathbb{N}\) such that for every \(m, n \in \mathbb{N}\) and every prime \(p\), the number \(f(m+n)\) is divisible by \(p\) if and only if \(f(m)+f(n)\) is divisible by \(p\).
( \(\mathbb{N}\) is the set of all positive integers.)


---
Suppose that function \(f: \mathbb{N} \rightarrow \mathbb{N}\) satisfies the problem conditions.
Lemma. For any prime \(p\) and any \(x, y \in \mathbb{N}\), we have \(x \equiv y(\bmod p)\) if and only if \(f(x) \equiv f(y)\) \((\bmod p)\). Moreover, \(p \mid f(x)\) if and only if \(p \mid x\).
Proof. Consider an arbitrary prime \(p\). Since \(f\) is surjective, there exists some \(x \in \mathbb{N}\) such that \(p \mid f(x)\). Let
\[
d=\min \{x \in \mathbb{N}: p \mid f(x)\} .
\]
By induction on \(k\), we obtain that \(p \mid f(k d)\) for all \(k \in \mathbb{N}\). The base is true since \(p \mid f(d)\). Moreover, if \(p \mid f(k d)\) and \(p \mid f(d)\) then, by the problem condition, \(p \mid f(k d+d)=f((k+1) d)\) as required.
Suppose that there exists an \(x \in \mathbb{N}\) such that \(d \nmid x\) but \(p \mid f(x)\). Let
\[
y=\min \{x \in \mathbb{N}: d \backslash x, p \mid f(x)\} .
\]
By the choice of \(d\), we have \(y > d\), and \(y-d\) is a positive integer not divisible by \(d\). Then \(p \nmid f(y-d)\), while \(p \mid f(d)\) and \(p \mid f(d+(y-d))=f(y)\). This contradicts the problem condition. Hence, there is no such \(x\), and
\[
p|f(x) \Longleftrightarrow d| x .
\]
Take arbitrary \(x, y \in \mathbb{N}\) such that \(x \equiv y(\bmod d)\). We have \(p \mid f(x+(2 x d-x))=f(2 x d)\); moreover, since \(d \mid 2 x d+(y-x)=y+(2 x d-x)\), we get \(p \mid f(y+(2 x d-x))\). Then by the problem condition \(p|f(x)+f(2 x d-x), p| f(y)+f(2 x d-x)\), and hence \(f(x) \equiv-f(2 x d-x) \equiv f(y)\) \((\bmod p)\)
On the other hand, assume that \(f(x) \equiv f(y)(\bmod p)\). Again we have \(p \mid f(x)+f(2 x d-x)\) which by our assumption implies that \(p \mid f(x)+f(2 x d-x)+(f(y)-f(x))=f(y)+f(2 x d-x)\). Hence by the problem condition \(p \mid f(y+(2 x d-x))\). Using (1) we get \(0 \equiv y+(2 x d-x) \equiv y-x\) \((\bmod d)\)
Thus, we have proved that
\[
x \equiv y \quad(\bmod d) \Longleftrightarrow f(x) \equiv f(y) \quad(\bmod p) .
\]
We are left to show that \(p=d\) : in this case (1) and (2) provide the desired statements.
The numbers \(1,2, \ldots, d\) have distinct residues modulo \(d\). By \((2)\), numbers \(f(1), f(2), \ldots\), \(f(d)\) have distinct residues modulo \(p\); hence there are at least \(d\) distinct residues, and \(p \geq d\). On the other hand, by the surjectivity of \(f\), there exist \(x_{1}, \ldots, x_{p} \in \mathbb{N}\) such that \(f\left(x_{i}\right)=i\) for any \(i=1,2, \ldots, p\). By \((2)\), all these \(x_{i}\) 's have distinct residues modulo \(d\). For the same reasons, \(d \geq p\). Hence, \(d=p\).
Now we prove that \(f(n)=n\) by induction on \(n\). If \(n=1\) then, by the Lemma, \(p \nmid f(1)\) for any prime \(p\), so \(f(1)=1\), and the base is established. Suppose that \(n > 1\) and denote \(k=f(n)\). Note that there exists a prime \(q \mid n\), so by the Lemma \(q \mid k\) and \(k > 1\).
If \(k > n\) then \(k-n+1 > 1\), and there exists a prime \(p \mid k-n+1\); we have \(k \equiv n-1\) \((\bmod p)\). By the induction hypothesis we have \(f(n-1)=n-1 \equiv k=f(n)(\bmod p)\). Now, by the Lemma we obtain \(n-1 \equiv n(\bmod p)\) which cannot be true. Analogously, if \(k < n\), then \(f(k-1)=k-1\) by induction hypothesis. Moreover, \(n-k+1 > 1\), so there exists a prime \(p \mid n-k+1\) and \(n \equiv k-1(\bmod p)\). By the Lemma again, \(k=f(n) \equiv\) \(f(k-1)=k-1(\bmod p)\), which is also false. The only remaining case is \(k=n\), so \(f(n)=n\).
Finally, the function \(f(n)=n\) obviously satisfies the condition.
