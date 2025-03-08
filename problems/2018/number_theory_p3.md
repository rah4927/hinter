---
id: fimo_2018_number_theory_p3
year: 2018
number: 3
difficulty: medium
topics: ["number theory"]
source: "IMO 2018 Number Theory Problem 3"
---

Define the sequence \(a_{0}, a_{1}, a_{2}, \ldots\) by \(a_{n}=2^{n}+2^{\lfloor n / 2\rfloor}\). Prove that there are infinitely many terms of the sequence which can be expressed as a sum of (two or more) distinct terms of the sequence, as well as infinitely many of those which cannot be expressed in such a way.

---
Call a nonnegative integer representable if it equals the sum of several (possibly 0 or 1 ) distinct terms of the sequence. We say that two nonnegative integers \(b\) and \(c\) are equivalent (written as \(b \sim c\) ) if they are either both representable or both non-representable.

One can easily compute

\[
S_{n-1}:=a_{0}+\cdots+a_{n-1}=2^{n}+2^{\lceil n / 2]}+2^{\lfloor n / 2]}-3 .
\]

Indeed, we have \(S_{n}-S_{n-1}=2^{n}+2^{\lfloor n / 2\rfloor}=a_{n}\) so we can use the induction. In particular, \(S_{2 k-1}=2^{2 k}+2^{k+1}-3\)

Note that, if \(n \geqslant 3\), then \(2^{[n / 2]} \geqslant 2^{2} > 3\), so

\[
S_{n-1}=2^{n}+2^{[n / 2]}+2^{\lfloor n / 2\rfloor}-3 > 2^{n}+2^{\lfloor n / 2\rfloor}=a_{n} .
\]

Also notice that \(S_{n-1}-a_{n}=2^{\lceil n / 2]}-3 < a_{n}\).

The main tool of the solution is the following claim.

Claim 1. Assume that \(b\) is a positive integer such that \(S_{n-1}-a_{n} < b < a_{n}\) for some \(n \geqslant 3\). Then \(b \sim S_{n-1}-b\).

Proof. As seen above, we have \(S_{n-1} > a_{n}\). Denote \(c=S_{n-1}-b\); then \(S_{n-1}-a_{n} < c < a_{n}\), so the roles of \(b\) and \(c\) are symmetrical.

Assume that \(b\) is representable. The representation cannot contain \(a_{i}\) with \(i \geqslant n\), since \(b < a_{n}\). So \(b\) is the sum of some subset of \(\left\{a_{0}, a_{1}, \ldots, a_{n-1}\right\}\); then \(c\) is the sum of the complement. The converse is obtained by swapping \(b\) and \(c\).

We also need the following version of this claim.

Claim 2. For any \(n \geqslant 3\), the number \(a_{n}\) can be represented as a sum of two or more distinct terms of the sequence if and only if \(S_{n-1}-a_{n}=2^{[n / 2]}-3\) is representable.

Proof. Denote \(c=S_{n-1}-a_{n} < a_{n}\). If \(a_{n}\) satisfies the required condition, then it is the sum of some subset of \(\left\{a_{0}, a_{1}, \ldots, a_{n-1}\right\}\); then \(c\) is the sum of the complement. Conversely, if \(c\) is representable, then its representation consists only of the numbers from \(\left\{a_{0}, \ldots, a_{n-1}\right\}\), so \(a_{n}\) is the sum of the complement.

By Claim 2, in order to prove the problem statement, it suffices to find infinitely many representable numbers of the form \(2^{t}-3\), as well as infinitely many non-representable ones. Claim 3. For every \(t \geqslant 3\), we have \(2^{t}-3 \sim 2^{4 t-6}-3\), and \(2^{4 t-6}-3 > 2^{t}-3\).

Proof. The inequality follows from \(t \geqslant 3\). In order to prove the equivalence, we apply Claim 1 twice in the following manner.

First, since \(S_{2 t-3}-a_{2 t-2}=2^{t-1}-3 < 2^{t}-3 < 2^{2 t-2}+2^{t-1}=a_{2 t-2}\), by Claim 1 we have \(2^{t}-3 \sim S_{2 t-3}-\left(2^{t}-3\right)=2^{2 t-2}\).

Second, since \(S_{4 t-7}-a_{4 t-6}=2^{2 t-3}-3 < 2^{2 t-2} < 2^{4 t-6}+2^{2 t-3}=a_{4 t-6}\), by Claim 1 we have \(2^{2 t-2} \sim S_{4 t-7}-2^{2 t-2}=2^{4 t-6}-3\).

Therefore, \(2^{t}-3 \sim 2^{2 t-2} \sim 2^{4 t-6}-3\), as required.

Now it is easy to find the required numbers. Indeed, the number \(2^{3}-3=5=a_{0}+a_{1}\) is representable, so Claim 3 provides an infinite sequence of representable numbers

\[
2^{3}-3 \sim 2^{6}-3 \sim 2^{18}-3 \sim \cdots \sim 2^{t}-3 \sim 2^{4 t-6}-3 \sim \cdots .
\]

On the other hand, the number \(2^{7}-3=125\) is non-representable (since by Claim 1 we have \(125 \sim S_{6}-125=24 \sim S_{4}-24=17 \sim S_{3}-17=4\) which is clearly non-representable). So Claim 3 provides an infinite sequence of non-representable numbers

\[
2^{7}-3 \sim 2^{22}-3 \sim 2^{82}-3 \sim \cdots \sim 2^{t}-3 \sim 2^{4 t-6}-3 \sim \cdots
\]
