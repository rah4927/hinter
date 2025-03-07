---
id: fimo_2010_number_theory_p5
year: 2010
number: 5
difficulty: medium
topics: ["number theory"]
source: "IMO 2010 Number Theory Problem 5"
---

Let \(\mathbb{N}\) be the set of all positive integers. Find all functions \(f: \mathbb{N} \rightarrow \mathbb{N}\) such that the number \((f(m)+n)(m+f(n))\) is a square for all \(m, n \in \mathbb{N}\).


---
First, it is clear that all functions of the form \(f(n)=n+c\) with a constant nonnegative integer \(c\) satisfy the problem conditions since \((f(m)+n)(f(n)+m)=(n+m+c)^{2}\) is a square.
We are left to prove that there are no other functions. We start with the following Lemma. Suppose that \(p \mid f(k)-f(\ell)\) for some prime \(p\) and positive integers \(k, \ell\). Then \(p \mid k-\ell\). Proof. Suppose first that \(p^{2} \mid f(k)-f(\ell)\), so \(f(\ell)=f(k)+p^{2} a\) for some integer \(a\). Take some positive integer \(D > \max \{f(k), f(\ell)\}\) which is not divisible by \(p\) and set \(n=p D-f(k)\). Then the positive numbers \(n+f(k)=p D\) and \(n+f(\ell)=p D+(f(\ell)-f(k))=p(D+p a)\) are both divisible by \(p\) but not by \(p^{2}\). Now, applying the problem conditions, we get that both the numbers \((f(k)+n)(f(n)+k)\) and \((f(\ell)+n)(f(n)+\ell)\) are squares divisible by \(p\) (and thus by \(\left.p^{2}\right)\); this means that the multipliers \(f(n)+k\) and \(f(n)+\ell\) are also divisible by \(p\), therefore \(p \mid(f(n)+k)-(f(n)+\ell)=k-\ell\) as well.
On the other hand, if \(f(k)-f(\ell)\) is divisible by \(p\) but not by \(p^{2}\), then choose the same number \(D\) and set \(n=p^{3} D-f(k)\). Then the positive numbers \(f(k)+n=p^{3} D\) and \(f(\ell)+n=\) \(p^{3} D+(f(\ell)-f(k))\) are respectively divisible by \(p^{3}\) (but not by \(\left.p^{4}\right)\) and by \(p\) (but not by \(p^{2}\) ). Hence in analogous way we obtain that the numbers \(f(n)+k\) and \(f(n)+\ell\) are divisible by \(p\), therefore \(p \mid(f(n)+k)-(f(n)+\ell)=k-\ell\).
We turn to the problem. First, suppose that \(f(k)=f(\ell)\) for some \(k, \ell \in \mathbb{N}\). Then by Lemma we have that \(k-\ell\) is divisible by every prime number, so \(k-\ell=0\), or \(k=\ell\). Therefore, the function \(f\) is injective.
Next, consider the numbers \(f(k)\) and \(f(k+1)\). Since the number \((k+1)-k=1\) has no prime divisors, by Lemma the same holds for \(f(k+1)-f(k)\); thus \(|f(k+1)-f(k)|=1\).
Now, let \(f(2)-f(1)=q,|q|=1\). Then we prove by induction that \(f(n)=f(1)+q(n-1)\). The base for \(n=1,2\) holds by the definition of \(q\). For the step, if \(n > 1\) we have \(f(n+1)=\) \(f(n) \pm q=f(1)+q(n-1) \pm q\). Since \(f(n) \neq f(n-2)=f(1)+q(n-2)\), we get \(f(n)=f(1)+q n\), as desired.
Finally, we have \(f(n)=f(1)+q(n-1)\). Then \(q\) cannot be \(-1\) since otherwise for \(n \geq f(1)+1\) we have \(f(n) \leq 0\) which is impossible. Hence \(q=1\) and \(f(n)=(f(1)-1)+n\) for each \(n \in \mathbb{N}\), and \(f(1)-1 \geq 0\), as desired.
