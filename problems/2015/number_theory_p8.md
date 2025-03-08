---
id: fimo_2015_number_theory_p8
year: 2015
number: 8
difficulty: medium
topics: ["number theory"]
source: "IMO 2015 Number Theory Problem 8"
---

For every positive integer \(n\) with prime factorization \(n=\prod_{i=1}^{k} p_{i}^{\alpha_{i}}\), define
\[
\mho(n)=\sum_{i: p_{i} > 10^{100}} \alpha_{i} .
\]
That is, \(\mho(n)\) is the number of prime factors of \(n\) greater than \(10^{100}\), counted with multiplicity.
Find all strictly increasing functions \(f: \mathbb{Z} \rightarrow \mathbb{Z}\) such that
\[
\mho(f(a)-f(b)) \leqslant \mho(a-b) \quad \text { for all integers } a \text { and } b \text { with } a > b .
\]


---
A straightforward check shows that all the functions listed in the answer satisfy the problem condition. It remains to show the converse.
Assume that \(f\) is a function satisfying the problem condition. Notice that the function \(g(x)=f(x)-f(0)\) also satisfies this condition. Replacing \(f\) by \(g\), we assume from now on that \(f(0)=0\); then \(f(n) > 0\) for any positive integer \(n\). Thus, we aim to prove that there exists a positive integer \(a\) with \(\mho(a)=0\) such that \(f(n)=a\) for all \(n \in \mathbb{Z}\).
We start by introducing some notation. Set \(N=10^{100}\). We say that a prime \(p\) is large if \(p > N\), and \(p\) is small otherwise; let \(\mathcal{S}\) be the set of all small primes. Next, we say that a positive integer is large or small if all its prime factors are such (thus, the number 1 is the unique number which is both large and small). For a positive integer \(k\), we denote the greatest large divisor of \(k\) and the greatest small divisor of \(k\) by \(L(k)\) and \(S(k)\), respectively; thus, \(k=L(k) S(k)\)
We split the proof into three steps.
Step 1. We prove that for every large \(k\), we have \(k|f(a)-f(b) \Longleftrightarrow k| a-b\). In other words, \(L(f(a)-f(b))=L(a-b)\) for all integers \(a\) and \(b\) with \(a > b\).
We use induction on \(k\). The base case \(k=1\) is trivial. For the induction step, assume that \(k_{0}\) is a large number, and that the statement holds for all large numbers \(k\) with \(k < k_{0}\).
Claim 1. For any integers \(x\) and \(y\) with \(0 < x-y < k_{0}\), the number \(k_{0}\) does not divide \(f(x)-f(y)\)
Proof. Assume, to the contrary, that \(k_{0} \mid f(x)-f(y)\). Let \(\ell=L(x-y)\); then \(\ell \leqslant x-y < k_{0}\). By the induction hypothesis, \(\ell \mid f(x)-f(y)\), and thus \(\operatorname{lcm}\left(k_{0}, \ell\right) \mid f(x)-f(y)\). Notice that \(\operatorname{lcm}\left(k_{0}, \ell\right)\) is large, and \(\operatorname{lcm}\left(k_{0}, \ell\right) \geqslant k_{0} > \ell\). But then
\[
\mho(f(x)-f(y)) \geqslant \mho\left(\operatorname{lcm}\left(k_{0}, \ell\right)\right) > \mho(\ell)=\mho(x-y)
\]
which is impossible.
Now we complete the induction step. By Claim 1, for every integer \(a\) each of the sequences
\[
f(a), f(a+1), \ldots, f\left(a+k_{0}-1\right) \text { and } f(a+1), f(a+2), \ldots, f\left(a+k_{0}\right)
\]
forms a complete residue system modulo \(k_{0}\). This yields \(f(a) \equiv f\left(a+k_{0}\right)\left(\bmod k_{0}\right)\). Thus, \(f(a) \equiv f(b)\left(\bmod k_{0}\right)\) whenever \(a \equiv b\left(\bmod k_{0}\right)\).
Finally, if \(a \neq \equiv b\left(\bmod k_{0}\right)\) then there exists an integer \(b^{\prime}\) such that \(b^{\prime} \equiv b\left(\bmod k_{0}\right)\) and \(\left|a-b^{\prime}\right| < k_{0}\). Then \(f(b) \equiv f\left(b^{\prime}\right) \not \equiv f(a)\left(\bmod k_{0}\right)\). The induction step is proved.
Step 2. We prove that for some small integer a there exist infinitely many integers \(n\) such that \(\overline{f(n)}=\) an. In other words, \(f\) is linear on some infinite set.
We start with the following general statement. Claim 2. There exists a constant \(c\) such that \(f(t) < c t\) for every positive integer \(t > N\).
Proof. Let \(d\) be the product of all small primes, and let \(\alpha\) be a positive integer such that \(2^{\alpha} > f(N)\). Then, for every \(p \in \mathcal{S}\) the numbers \(f(0), f(1), \ldots, f(N)\) are distinct modulo \(p^{\alpha}\). Set \(P=d^{\alpha}\) and \(c=P+f(N)\).
Choose any integer \(t > N\). Due to the choice of \(\alpha\), for every \(p \in \mathcal{S}\) there exists at most one nonnegative integer \(i \leqslant N\) with \(p^{\alpha} \mid f(t)-f(i)\). Since \(|\mathcal{S}| < N\), we can choose a nonnegative integer \(j \leqslant N\) such that \(p^{\alpha} \nmid f(t)-f(j)\) for all \(p \in \mathcal{S}\). Therefore, \(S(f(t)-f(j)) < P\).
On the other hand, Step 1 shows that \(L(f(t)-f(j))=L(t-j) \leqslant t-j\). Since \(0 \leqslant j \leqslant N\), this yields
\[
f(t)=f(j)+L(f(t)-f(j)) \cdot S(f(t)-f(j)) < f(N)+(t-j) P \leqslant(P+f(N)) t=c t .
\]
Now let \(\mathcal{T}\) be the set of large primes. For every \(t \in \mathcal{T}\), Step 1 implies \(L(f(t))=t\), so the ratio \(f(t) / t\) is an integer. Now Claim 2 leaves us with only finitely many choices for this ratio, which means that there exists an infinite subset \(\mathcal{T}^{\prime} \subseteq \mathcal{T}\) and a positive integer a such that \(f(t)=\) at for all \(t \in \mathcal{T}^{\prime}\), as required.
Since \(L(t)=L(f(t))=L(a) L(t)\) for all \(t \in \mathcal{T}^{\prime}\), we get \(L(a)=1\), so the number \(a\) is small.
Step 3. We show that \(f(x)=\) ax for all \(x \in \mathbb{Z}\).
Let \(R_{i}=\{x \in \mathbb{Z}: x \equiv i(\bmod N !)\}\) denote the residue class of \(i\) modulo \(N !\).
Claim 3. Assume that for some \(r\), there are infinitely many \(n \in R_{r}\) such that \(f(n)=a n\). Then \(f(x)=a x\) for all \(x \in R_{r+1}\).
Proof. Choose any \(x \in R_{r+1}\). By our assumption, we can select \(n \in R_{r}\) such that \(f(n)=a\) an and \(|n-x| > |f(x)-a x|\). Since \(n-x \equiv r-(r+1)=-1(\bmod N !)\), the number \(|n-x|\) is large. Therefore, by Step 1 we have \(f(x) \equiv f(n)=a n \equiv a x(\bmod n-x)\), so \(n-x \mid f(x)-a x\). Due to the choice of \(n\), this yields \(f(x)=a x\).
To complete Step 3, notice that the set \(\mathcal{T}^{\prime}\) found in Step 2 contains infinitely many elements of some residue class \(R_{i}\). Applying Claim 3, we successively obtain that \(f(x)=a x\) for all \(x \in R_{i+1}, R_{i+2}, \ldots, R_{i+N !}=R_{i}\). This finishes the solution.
