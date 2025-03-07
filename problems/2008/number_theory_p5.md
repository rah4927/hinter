---
id: fimo_2008_number_theory_p5
year: 2008
number: 5
difficulty: medium
topics: ["number theory"]
source: "IMO 2008 Number Theory Problem 5"
---

For every \(n \in \mathbb{N}\) let \(d(n)\) denote the number of (positive) divisors of \(n\). Find all functions \(f: \mathbb{N} \rightarrow \mathbb{N}\) with the following properties:
(i) \(d(f(x))=x\) for all \(x \in \mathbb{N}\);
(ii) \(f(x y)\) divides \((x-1) y^{x y-1} f(x)\) for all \(x, y \in \mathbb{N}\).
\[
f(n)=p_{1}^{p_{1}^{a_{1}}-1} p_{2}^{p_{2}^{a_{2}}-1} \cdots p_{k}^{p_{k}^{a_{k}}-1} \text { where } n=p_{1}^{a_{1}} p_{2}^{a_{2}} \cdots p_{k}^{a_{k}} \text { is the prime factorization of } n > 1 \text {. }
\]

---
There is a unique solution: the function \(f: \mathbb{N} \rightarrow \mathbb{N}\) defined by \(f(1)=1\) and
\[
f(n)=p_{1}^{p_{1}^{a_{1}}-1} p_{2}^{p_{2}^{a_{2}}-1} \cdots p_{k}^{p_{k}^{a_{k}}-1} \text { where } n=p_{1}^{a_{1}} p_{2}^{a_{2}} \cdots p_{k}^{a_{k}} \text { is the prime factorization of } n > 1 \text {. }
\]
Direct verification shows that this function meets the requirements.
Conversely, let \(f: \mathbb{N} \rightarrow \mathbb{N}\) satisfy (i) and (ii). Applying (i) for \(x=1\) gives \(d(f(1))=1\), so \(f(1)=1\). In the sequel we prove that (1) holds for all \(n > 1\). Notice that \(f(m)=f(n)\) implies \(m=n\) in view of (i). The formula \(d\left(p_{1}^{b_{1}} \cdots p_{k}^{b_{k}}\right)=\left(b_{1}+1\right) \cdots\left(b_{k}+1\right)\) will be used throughout.
Let \(p\) be a prime. Since \(d(f(p))=p\), the formula just mentioned yields \(f(p)=q^{p-1}\) for some prime \(q\); in particular \(f(2)=q^{2-1}=q\) is a prime. We prove that \(f(p)=p^{p-1}\) for all primes \(p\).
Suppose that \(p\) is odd and \(f(p)=q^{p-1}\) for a prime \(q\). Applying (ii) first with \(x=2\), \(y=p\) and then with \(x=p, y=2\) shows that \(f(2 p)\) divides both \((2-1) p^{2 p-1} f(2)=p^{2 p-1} f(2)\) and \((p-1) 2^{2 p-1} f(p)=(p-1) 2^{2 p-1} q^{p-1}\). If \(q \neq p\) then the odd prime \(p\) does not divide \((p-1) 2^{2 p-1} q^{p-1}\), hence the greatest common divisor of \(p^{2 p-1} f(2)\) and \((p-1) 2^{2 p-1} q^{p-1}\) is a divisor of \(f(2)\). Thus \(f(2 p)\) divides \(f(2)\) which is a prime. As \(f(2 p) > 1\), we obtain \(f(2 p)=f(2)\) which is impossible. So \(q=p\), i. e. \(f(p)=p^{p-1}\).
For \(p=2\) the same argument with \(x=2, y=3\) and \(x=3, y=2\) shows that \(f(6)\) divides both \(3^{5} f(2)\) and \(2^{6} f(3)=2^{6} 3^{2}\). If the prime \(f(2)\) is odd then \(f(6)\) divides \(3^{2}=9\), so \(f(6) \in\{1,3,9\}\). However then \(6=d(f(6)) \in\{d(1), d(3), d(9)\}=\{1,2,3\}\) which is false. In conclusion \(f(2)=2\).
Next, for each \(n > 1\) the prime divisors of \(f(n)\) are among the ones of \(n\). Indeed, let \(p\) be the least prime divisor of \(n\). Apply (ii) with \(x=p\) and \(y=n / p\) to obtain that \(f(n)\) divides \((p-1) y^{n-1} f(p)=(p-1) y^{n-1} p^{p-1}\). Write \(f(n)=\ell P\) where \(\ell\) is coprime to \(n\) and \(P\) is a product of primes dividing \(n\). Since \(\ell\) divides \((p-1) y^{n-1} p^{p-1}\) and is coprime to \(y^{n-1} p^{p-1}\), it divides \(p-1\); hence \(d(\ell) \leq \ell < p\). But (i) gives \(n=d(f(n))=d(\ell P)\), and \(d(\ell P)=d(\ell) d(P)\) as \(\ell\) and \(P\) are coprime. Therefore \(d(\ell)\) is a divisor of \(n\) less than \(p\), meaning that \(\ell=1\) and proving the claim.
Now (1) is immediate for prime powers. If \(p\) is a prime and \(a \geq 1\), by the above the only prime factor of \(f\left(p^{a}\right)\) is \(p\) (a prime factor does exist as \(f\left(p^{a}\right) > 1\) ). So \(f\left(p^{a}\right)=p^{b}\) for some \(b \geq 1\), and (i) yields \(p^{a}=d\left(f\left(p^{a}\right)\right)=d\left(p^{b}\right)=b+1\). Hence \(f\left(p^{a}\right)=p^{p^{a}-1}\), as needed.
Let us finally show that (1) is true for a general \(n > 1\) with prime factorization \(n=p_{1}^{a_{1}} \cdots p_{k}^{a_{k}}\). We saw that the prime factorization of \(f(n)\) has the form \(f(n)=p_{1}^{b_{1}} \cdots p_{k}^{b_{k}}\). For \(i=1, \ldots, k\), set \(x=p_{i}^{a_{i}}\) and \(y=n / x\) in (ii) to infer that \(f(n)\) divides \(\left(p_{i}^{a_{i}}-1\right) y^{n-1} f\left(p_{i}^{a_{i}}\right)\). Hence \(p_{i}^{b_{i}}\) divides \(\left(p_{i}^{a_{i}}-1\right) y^{n-1} f\left(p_{i}^{a_{i}}\right)\), and because \(p_{i}^{b_{i}}\) is coprime to \(\left(p_{i}^{a_{i}}-1\right) y^{n-1}\), it follows that \(p_{i}^{b_{i}}\) divides \(f\left(p_{i}^{a_{i}}\right)=p_{i}^{p_{i}{ }_{i}-1}\). So \(b_{i} \leq p_{i}^{a_{i}}-1\) for all \(i=1, \ldots, k\). Combined with (i), these conclusions imply
\[
p_{1}^{a_{1}} \cdots p_{k}^{a_{k}}=n=d(f(n))=d\left(p_{1}^{b_{1}} \cdots p_{k}^{b_{k}}\right)=\left(b_{1}+1\right) \cdots\left(b_{k}+1\right) \leq p_{1}^{a_{1}} \cdots p_{k}^{a_{k}} .
\]
Hence all inequalities \(b_{i} \leq p_{i}^{a_{i}}-1\) must be equalities, \(i=1, \ldots, k\), implying that (1) holds true. The proof is complete.
