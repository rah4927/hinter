---
id: fimo_2015_number_theory_p4
year: 2015
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2015 Number Theory Problem 4"
---

Suppose that \(a_{0}, a_{1}, \ldots\) and \(b_{0}, b_{1}, \ldots\) are two sequences of positive integers satisfying \(a_{0}, b_{0} \geqslant 2\) and
\[
a_{n+1}=\operatorname{gcd}\left(a_{n}, b_{n}\right)+1, \quad b_{n+1}=\operatorname{lcm}\left(a_{n}, b_{n}\right)-1
\]
for all \(n \geqslant 0\). Prove that the sequence \(\left(a_{n}\right)\) is eventually periodic; in other words, there exist integers \(N \geqslant 0\) and \(t > 0\) such that \(a_{n+t}=a_{n}\) for all \(n \geqslant N\)

---
Let \(s_{n}=a_{n}+b_{n}\). Notice that if \(a_{n} \mid b_{n}\), then \(a_{n+1}=a_{n}+1, b_{n+1}=b_{n}-1\) and \(s_{n+1}=s_{n}\). So, \(a_{n}\) increases by 1 and \(s_{n}\) does not change until the first index is reached with \(a_{n} \nmid s_{n}\). Define
\[
W_{n}=\left\{m \in \mathbb{Z}_{ > 0}: m \geqslant a_{n} \text { and } m \nmid s_{n}\right\} \quad \text { and } \quad w_{n}=\min W_{n} \text {. }
\]
Claim 1. The sequence \(\left(w_{n}\right)\) is non-increasing.
Proof. If \(a_{n} \mid b_{n}\) then \(a_{n+1}=a_{n}+1\). Due to \(a_{n} \mid s_{n}\), we have \(a_{n} \notin W_{n}\). Moreover \(s_{n+1}=s_{n}\); therefore, \(W_{n+1}=W_{n}\) and \(w_{n+1}=w_{n}\).
Otherwise, if \(a_{n} \nmid b_{n}\), then \(a_{n} \nmid s_{n}\), so \(a_{n} \in W_{n}\) and thus \(w_{n}=a_{n}\). We show that \(a_{n} \in W_{n+1}\); this implies \(w_{n+1} \leqslant a_{n}=w_{n}\). By the definition of \(W_{n+1}\), we need that \(a_{n} \geqslant a_{n+1}\) and \(a_{n} \nmid s_{n+1}\). The first relation holds because of \(\operatorname{gcd}\left(a_{n}, b_{n}\right) < a_{n}\). For the second relation, observe that in \(s_{n+1}=\operatorname{gcd}\left(a_{n}, b_{n}\right)+\operatorname{lcm}\left(a_{n}, b_{n}\right)\), the second term is divisible by \(a_{n}\), but the first term is not. So \(a_{n} \nmid s_{n+1}\); that completes the proof of the claim.
Let \(w=\min _{n} w_{n}\) and let \(N\) be an index with \(w=w_{N}\). Due to Claim 1 , we have \(w_{n}=w\) for all \(n \geqslant N\).
Let \(g_{n}=\operatorname{gcd}\left(w, s_{n}\right)\). As we have seen, starting from an arbitrary index \(n \geqslant N\), the sequence \(a_{n}, a_{n+1}, \ldots\) increases by 1 until it reaches \(w\), which is the first value not dividing \(s_{n}\); then it drops to \(\operatorname{gcd}\left(w, s_{n}\right)+1=g_{n}+1\).
Claim 2. The sequence \(\left(g_{n}\right)\) is constant for \(n \geqslant N\).
Proof. If \(a_{n} \mid b_{n}\), then \(s_{n+1}=s_{n}\) and hence \(g_{n+1}=g_{n}\). Otherwise we have \(a_{n}=w\),
\[
\begin{aligned}
\operatorname{gcd}\left(a_{n}, b_{n}\right) & =\operatorname{gcd}\left(a_{n}, s_{n}\right)=\operatorname{gcd}\left(w, s_{n}\right)=g_{n} \\
s_{n+1} & =\operatorname{gcd}\left(a_{n}, b_{n}\right)+\operatorname{lcm}\left(a_{n}, b_{n}\right)=g_{n}+\frac{a_{n} b_{n}}{g_{n}}=g_{n}+\frac{w\left(s_{n}-w\right)}{g_{n}} \\
\text { and } g_{n+1} & =\operatorname{gcd}\left(w, s_{n+1}\right)=\operatorname{gcd}\left(w, g_{n}+\frac{s_{n}-w}{g_{n}} w\right)=\operatorname{gcd}\left(w, g_{n}\right)=g_{n} .
\end{aligned}
\]
Let \(g=g_{N}\). We have proved that the sequence \(\left(a_{n}\right)\) eventually repeats the following cycle:
\[
g+1 \mapsto g+2 \mapsto \ldots \mapsto w \mapsto g+1 .
\]
